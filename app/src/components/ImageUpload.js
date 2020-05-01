import React from "react";


const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient('https://ipfs.infura.io:5001/');

const { urlSource } = ipfsClient;


class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };
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

            console.log(this.state)

            for await (const file of ipfs.add(this.state.file)) {
                console.log(file);
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
        } else {
            imagePreview = (
                <div className="previewText">
                    Select your new fancy artwork
                </div>
            );
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(event) => this._handleSubmit(event)}>
                    <input className="fileInput"
                        type="file"
                        onChange={(event) => this._handleImageChange(event)} />
                    <button className="submitButton"
                        type="submit"
                        onClick={(event) => this._handleSubmit(event)}>Upload Image</button>
                </form>
                <div className="imgPreview">
                    {imagePreview}
                </div>
            </div>
        )
    }
}

export default ImageUpload;