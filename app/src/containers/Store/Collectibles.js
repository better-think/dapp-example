import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import { newContextComponents } from "@drizzle/react-components";
import Nifty from '../CollectibleHierarchy/Collectible-old';

const { AccountData, ContractData, ContractForm } = newContextComponents;


class Collectibles extends React.Component {
    state = {
        collIdsKey: null,
        baseURIKey: null,
        collectibles: []
    };

    componentDidMount() {
        const { drizzle } = this.props;
        const contract = drizzle.contracts.Collectible;

        let collIdsKey = contract.methods["collectiblesOf"]
            .cacheCall(this.props.drizzleState.accounts[0]);

        let baseURIKey = contract.methods["baseURI"].cacheCall();
        this.setState({ collIdsKey, baseURIKey });
    }

    render() {
        const { Collectible } = this.props.drizzleState.contracts;
        let collIds = Collectible.collectiblesOf[this.state.collIdsKey];
        let baseURI = Collectible.baseURI[this.state.baseURIKey];

        return (
            <div className="section">
                <h2>Owned Collectibles</h2>
                <p><span>You own </span>
                    <strong>
                        <ContractData
                            drizzle={this.props.drizzle}
                            drizzleState={this.props.drizzleState}
                            contract="Collectible"
                            method="balanceOf"
                            methodArgs={[this.props.drizzleState.accounts[0]]}
                            hideIndicator
                        />
                        <span> </span>    
                        <ContractData
                            drizzle={this.props.drizzle}
                            drizzleState={this.props.drizzleState}
                            contract="Collectible"
                            method="symbol"
                            hideIndicator
                        />
                    </strong>
                </p>
                <CardDeck>
                    {collIds && collIds.value.map((id) => {
                        return <Nifty id={id} key={id}
                            drizzle={this.props.drizzle}
                            baseURI={baseURI && baseURI.value}
                        />;
                    })}
                </CardDeck>
            </div>
        )
    }
}

export default Collectibles;