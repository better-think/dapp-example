import Web3 from "web3";

import Collectible from "./contracts/Collectible.json";


const options = {
    web3: {
        block: false,
        customProvider: new Web3("ws://localhost:8545"),
    },
    contracts: [Collectible],
    events: {},
};

export default options;