import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
//import NavItems from '../Navigation/NavItems/NavItems';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import RegistrationModal from '../Registration/RegistrationModal';

const layout = (props) => (
    <Auxiliary>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
            <RegistrationModal/>
        </main>
    </Auxiliary>
);

export default layout;
