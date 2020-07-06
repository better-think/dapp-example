import Web3 from "web3";

import Collectible from "./contracts/Collectible.json";


let web3 = null;

if (window.ethereum) {
    web3 = new Web3(window.ethereum)
    window.ethereum.enable().catch(error => {
        // User denied account access
        console.log(error)
    });
}
else {
    web3 = new Web3("wss://ropsten.infura.io/ws/v3/27b9545d910143088317fba41303fbe6");
}


const options = {
    web3: {
        block: false,
        customProvider: web3,
    },
    contracts: [Collectible],
    events: {},
};

export default options;