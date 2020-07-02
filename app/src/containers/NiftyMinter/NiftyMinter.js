import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';

import Auxiliary from '../../hoc/Auxiliary';

import MintCard from '../../components/MintCard/MintCard';

import ipfs from '../../ipfs';

import classes from './NiftyMinter.css';
import Sidebar from '../../components/Sidebar/Sidebar';




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

        this._handleAddNifty = this._handleAddNifty.bind(this);
        this._handleNameChange = this._handleNameChange.bind(this);
        this._handleDescrChange = this._handleDescrChange.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleMinting = this._handleMinting.bind(this);
    }

    render() {
        return (
            <Auxiliary>
                  
                <div className={classes.Wrap}>
                 
                    <div className={classes.navWrap}>
                    <div className={classes.Sidebar}>
                    <div className={classes.BtnLayout}>
                        <button className={classes.AddBtn} onClick={this._handleAddNifty}> + </button>
                    </div>
                    <div className={classes.BtnLayout}>
                        
                    </div>
                    </div>
                    

                    </div>
                    <div className={classes.Left} >
                       <h3 className={classes.title}>New collectible</h3>                                
                        <CardDeck className={classes.MinterItems}>
                            {this.state.nifties.map((nifty, index) =>
                                <MintCard id={index} key={index}
                                    imageSrc={nifty.previewUrl}
                                    onNameChange={this._handleNameChange}
                                    onDescrChange={this._handleDescrChange}
                                    onImageChange={this._handleImageChange}
                                />
                            )}
                        
                         </CardDeck>
                
                    </div>
                    <div className={classes.Right}>
                        <h3 className={classes.title}>Artwork Preview</h3>
                        <button  className={classes.MintBtn}onClick={this._handleMinting}>Mint</button>
                    </div>
                
              
                </div>
            </Auxiliary>
        )
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

    _handleNameChange(event, id) {
        let nifties = [...this.state.nifties];
        nifties[id].name = event.target.value;

        this.setState({ nifties: nifties });
    }

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

    _handleMinting() {
        let nifties = this.state.nifties.map(nifty => {
            return {
                name: nifty.name,
                description: nifty.description,
                multiHash: nifty.multiHash
            }
        });

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

