import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';

import Aux from '../../hoc/Aux';

import MintCard from '../../components/MintCard/MintCard';

// Interaction with decentralized storage protocol
import ipfs from '../../ipfs';

import classes from './NiftyMinter.css';



class NiftyMinter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nifties: [{
                name: null,
                file: null,
                description: null,
                previewUrl: null,
                multiHash: null
            }],
            minting: false
        }

        // We will pass these functions to other components, where 'this'
        // will be undefined, since 'this' is needed within the function
        // code we bind 'this' now to the functions
        this._handleDeleteNifty = this._handleDeleteNifty.bind(this);
        this._handleAddNifty = this._handleAddNifty.bind(this);
        this._handleNameChange = this._handleNameChange.bind(this);
        this._handleDescrChange = this._handleDescrChange.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleMinting = this._handleMinting.bind(this);
    }

    render() {
        return (
            <Aux>
                <h2>new collectible</h2>
                <div className={classes.Border}>Artwork Preview</div>
                <CardDeck className={classes.Border}>
                    <button onClick={this._handleDeleteNifty}> - </button>
                    {this.state.nifties.map((nifty, index) =>
                        <MintCard id={index} key={index}
                            imageSrc={nifty.previewUrl}
                            onNameChange={this._handleNameChange}
                            onDescrChange={this._handleDescrChange}
                            onImageChange={this._handleImageChange}
                        />
                    )}
                    <button onClick={this._handleAddNifty}> + </button>
                </CardDeck>
                <div>
                    <button onClick={this._handleMinting}>Mint</button>
                </div>
            </Aux>
        )
    }

    _handleDeleteNifty() {
        // we use '...' operator and not 'nifties = this.state.nifties'
        // because we want a new copy of the state and not reference
        let nifties = [...this.state.nifties];
        nifties.pop();

        this.setState({ nifties: nifties });
    }

    _handleAddNifty() {
        this.setState({
            nifties: [
                ...this.state.nifties,
                {
                    name: null,
                    file: null,
                    description: null,
                    previewUrl: null,
                    multiHash: null
                }
            ]
        });
    }

    /* Each type we type the name we write it into the state */
    _handleNameChange(event, id) {
        let nifties = [...this.state.nifties];
        nifties[id].name = event.target.value;

        this.setState({ nifties: nifties });
    }

    /* Each type we type the description we write it into the state */
    _handleDescrChange(event, id) {
        let nifties = [...this.state.nifties];
        nifties[id].description = event.target.value;

        this.setState({ nifties: nifties });
    }

    _handleImageChange(event, id) {
        let nifties = [...this.state.nifties];
        nifties[id].file = event.target.files[0];

        let reader = new FileReader();

        reader.onloadend = async () => {
            nifties[id].previewUrl = reader.result;
            for await (const file of ipfs.add(nifties[id].file)) {
                nifties[id].multiHash = file.path;
            }
            this.setState({ nifties: nifties });
            console.log(this.state.nifties);
        }

        reader.readAsDataURL(nifties[id].file);
    }

    /* When the user is ready to issue the artwork this function is invoked */
    _handleMinting() {
        let nifties = this.state.nifties.map(nifty => {
            return {
                name: nifty.name,
                description: nifty.description,
                multiHash: nifty.multiHash
            }
        });

        // Interaction with Smart Contract
        this.props.drizzle.contracts.Collectible.methods.multiMint
            .cacheSend(
                nifties,
                {
                    from: this.props.drizzleState.accounts[0],
                    gasPrice: 20000000000,
                    gas: 4000000
                }
            );
    }
}

export default NiftyMinter;
