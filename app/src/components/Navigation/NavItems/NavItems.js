import React from 'react';
import { DrizzleContext } from "@drizzle/react-plugin";

import Aux from '../../../hoc/Aux';
import NavItem from './NavItem/NavItem';
import Logo from '../../Logo/Logo';

import classes from './NavItems.css';

const navItems = () => (
    <DrizzleContext.Consumer>
        {drizzleContext => {
            const { drizzleState } = drizzleContext;

            return (
                <Aux>
                    <hr className={classes.NavLine}></hr>
                    <ul className={classes.NavItems}>
                        <NavItem exact link='/'>
                            <Logo />
                        </NavItem>
                        <NavItem link='/store'>Collect</NavItem>
                        <NavItem link='/mint'>Mint</NavItem>
                        <NavItem link='/mix'>Mix</NavItem>
                        {/* <NavItem link='/account'>
                            <span>{drizzleState.accountBalances[0]}</span>
                        </NavItem> */}
                    </ul>
                </Aux>
            )
        }}
    </DrizzleContext.Consumer>
);

export default navItems;