import React from 'react';
import Card from 'react-bootstrap/Card';

// import axios from 'axios';

const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient('https://ipfs.infura.io:5001/');


class Nifty extends React.Component {
    state = {
        nifty: {
            id: this.props.id,
            name: null,
            details: null,
            multiHash: null,
            file: null
        }
    }

    componentDidMount() {
        this.props.drizzle.contracts.Collectible.methods
            .collectibleData(this.state.nifty.id)
            .call()
            .then(response => {
                console.log('Collectible.js: nifty name is', response)
                this.setState({
                    nifty: {
                        id: this.state.nifty.id,
                        name: response[0],
                        details: response[1],
                        multiHash: null,
                        file: null
                    }
                });

                let getAsset = async (multiHash) => {
                    let file;

                    for await (const chunk of ipfs.cat(multiHash)) {
                        file = chunk;
                    };

                    var b64encoded = btoa(String.fromCharCode.apply(null, file));
                    var fileUrl = "data:image/png;base64," + b64encoded;

                    this.setState({
                        nifty: {
                            id: this.state.nifty.id,
                            name: this.state.nifty.name,
                            details: this.state.nifty.details,
                            multiHash: response,
                            file: fileUrl
                        }
                    });

                    console.log(fileUrl)

                    return file;
                }

                this.props.drizzle.contracts.Collectible.methods
                    .tokenURI(this.state.nifty.id)
                    .call()
                    .then(response => {
                        console.log('Collectible.js: nifty URI is', response)

                        getAsset(response);
                    });
            });
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        <span style={{ fontWeight: 'bold' }}>{this.state.nifty.name}</span>
                    </Card.Title>
                    <Card.Img variant="top" src={this.state.nifty.file} />
                    <Card.Text>
                        {this.state.nifty.details}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        )
    }
}


export default Nifty;