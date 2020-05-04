import React from "react";

import { BrowserRouter, Route, Link } from 'react-router-dom';

import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";

import MintCollectible from "./components/MintCollectible";
import "./App.css";
import Collectibles from "./components/Collectibles";
import Account from "./components/Account";

const drizzle = new Drizzle(drizzleOptions);

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <DrizzleContext.Provider drizzle={drizzle}>
                    <DrizzleContext.Consumer>
                        {drizzleContext => {
                            const { drizzle, drizzleState, initialized } = drizzleContext;

                            if (!initialized) {
                                return "Loading..."
                            }

                            return (
                                <div className="App">
                                    <header>
                                        <toolbar>
                                        <nav>
                                            <ul>
                                                <li><Link to='/'>Collect</Link></li>
                                                <li><Link to='/'>Mint</Link></li>
                                                <li><Link to='/'>Mix</Link></li>
                                            </ul>
                                        </nav>
                                        </toolbar>
                                    </header>
                                    <h1>Albom</h1>
                                    <Account drizzle={drizzle} drizzleState={drizzleState} />
                                    <MintCollectible drizzle={drizzle} drizzleState={drizzleState} />
                                    <Collectibles drizzle={drizzle} drizzleState={drizzleState} />
                                </div>
                            )
                        }}
                    </DrizzleContext.Consumer>
                </DrizzleContext.Provider>
            </BrowserRouter>
        );
    };
}

export default App;
