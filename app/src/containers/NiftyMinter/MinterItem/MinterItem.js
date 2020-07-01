import React from 'react';

import classes from './MinterItem.css';

const minterItem = (props) => {
    return(
        <li className={classes.MinterItem}>
            {props.children}
        </li>
    )
}

export default minterItem;