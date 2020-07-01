const ipfsClient = require('ipfs-http-client');

const ipfs = ipfsClient('https://ipfs.infura.io:5001/');

export default ipfs;