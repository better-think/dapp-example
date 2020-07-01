import React from 'react';

import Aux from '../../hoc/Aux';
//import NavItems from '../Navigation/NavItems/NavItems';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import RegistrationModal from '../Registration/RegistrationModal';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
            <RegistrationModal/>
        </main>
    </Aux>
);

export default layout;
