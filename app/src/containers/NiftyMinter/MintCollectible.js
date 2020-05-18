import React from "react";

import ipfs from '../../ipfs';


class MintCollectible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colName: null,
            colDetails: null,
            file: '',
            imagePreviewUrl: '',
            ipfsMultihash: null,
            forging: false
        }
    }

    _handleNameChange(event) {
        this.setState({
            colName: event.target.value
        });
    }

    _handleDetailsChange(event) {
        this.setState({
            colDetails: event.target.value
        });
    }

    _handleSubmit(event) {
        event.preventDefault();
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(event) {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = async () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });

            for await (const file of ipfs.add(this.state.file)) {
                this.props.drizzle.contracts.Collectible.methods.mint
                    .cacheSend(
                        this.state.colName,
                        this.state.colDetails,
                        file.path,
                        {
                            from: this.props.drizzleState.accounts[0],
                            gasPrice: 20000000000,
                            gas: 4000000
                        }
                    );
            }
        }

        reader.readAsDataURL(file);
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let imagePreview = null;

        if (imagePreviewUrl) {
            imagePreview = (
                <img src={imagePreviewUrl} />
            );
        }

        return (
            <div className="section">
                <h2>new collectible</h2>

                <form id='mint-form'>
                    {/* <p>That is going to have the following incisions</p> */}
                    <p>
                        <input type='text'
                            placeholder='collectible name...' 
                            onChange={(event) => this._handleNameChange(event)} />
                        <span style={{ fontWeight: 'bold' }}> Name</span>
                    </p>
                    <p>
                        <input type='text'
                            placeholder='collectible details...'
                            onChange={(event) => this._handleDetailsChange(event)} />
                        <span style={{ fontWeight: 'bold' }}> Details</span>
                    </p>
                    <p>
                        {/* <span style={{ fontWeight: 'bold' }}>Unique Artwork Gem </span> */}
                        <input className="fileInput" type="file" multiple
                            onChange={(event) => this._handleImageChange(event)} />
                    </p>
                    {/* <div className="imgPreview">
                        {imagePreview}
                    </div> */}
                    <p />
                    <div align='right'>
                        <button className="submitButton" type="submit"
                            onClick={(event) => this._handleSubmit(event)}>NFTIFY</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default MintCollectible;