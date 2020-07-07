import React,{useState} from 'react';
import classes from './Side.css';
import NavItems from '../NavItems/NavItems';

import Auxiliary from '../../../hoc/Auxiliary';

const Side =(props) =>{

    return(
        <div className={classes.side}>
           <div className={classes.close}onClick={props.Close}>X</div>
           <NavItems/>
        </div>
    )
}

export default Side;
