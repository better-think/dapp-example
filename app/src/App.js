import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";


import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Store from './containers/Store/Store';
import Mixer from './containers/Mixer/Mixer';
import NiftyMinter from './containers/NiftyMinter/NiftyMinter';

import './App.css';

const drizzle = new Drizzle(drizzleOptions);


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <DrizzleContext.Provider drizzle={drizzle}>
                    <DrizzleContext.Consumer>
                        {drizzleContext => {
                            const { initialized, drizzleState } = drizzleContext;

                            if (!initialized) {
                                return "Loading..."
                            }

                            return (
                                <div className="App">
                                    <Layout>
                                        <Switch>
                                            <Route exact path='/' component={Home} />
                                            <Route path='/store' component={Store} />
                                            <Route path='/mint' render={(props) => 
                                                <NiftyMinter {...props} 
                                                    drizzle={drizzle} drizzleState={drizzleState} />}
                                            />
                                            {/* <Route path='/mix' component={Mixer} /> */}
                                        </Switch>
                                    </Layout>
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
