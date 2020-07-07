import React,{useState} from 'react';
import classes from './Logo.css';
import Auxiliary from '../../../../hoc/Auxiliary';
import navItems from '../../NavItems/NavItems';
import NavItems from '../../NavItems/NavItems';
import logo2 from '../../../../assets/logo2.png';
const Logo =(props)=> {

    

    return(
      
     
          <img className={classes.Img} src={logo2} onClick={props.click}></img>
          
       
         
   
    )
}

export default Logo;