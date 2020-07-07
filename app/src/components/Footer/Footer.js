import React,{useState} from 'react';

import Button from 'react-bootstrap/Modal';

import Auxiliary from '../../hoc/Auxiliary';

import classes from './Footer.css';

const Footer =()=> {
  

        return (
        <Auxiliary>
            <div className={classes.footerwrap}>
                <div className={classes.row1}>
                    <div className={classes.col1}>
                        <h3>Holon</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu neque eros.
                            Cras fringilla, purus et lacinia accumsan, est quam sodales lorem, id sodales
                            turpis nibh consequat arcu. Sed tincidunt scelerisque mauris pulvinar euismod. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula lectus
                            imperdiet purus elementum, ut venenatis risus tincidunt. Nam vel augue nec tellus
                            congue eleifend id a sem. Ut elementum, ante ac aliquet condimentum, nulla felis
                            gravida sem, non condimentum enim ligula at nisi.</p>
                    </div>
                    <div className={classes.col2}>
                        <ul>
                            <span>My Account</span>
                            <li>My Items</li>
                            <li>My Activity</li>
                            <li>My Offers</li>
                            <li>My Referrals</li>
                        </ul>
                    </div>
                    <div className={classes.col3}>
                    <ul>
                            <span>Company</span>
                            <li>About</li>
                            <li>Suggenstion</li>
                            <li>Advertise</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.row2}>
                    <div className={classes.col2_1}>
                    <span>Join the Holon Comunity</span>
                    <p>Stay up-to-date with our features, meet other Holon enthusiasts, and learn more!</p>
                    </div>
                    <div className={classes.col2_2}>
                        <ul className={classes.social}>
                            <li> FB</li>
                            <li> IG</li>
                            <li> LI</li>
                            <li> GIT</li>
                            <li> MAIL</li>
                        </ul>
                    </div>
                </div>
            </div>
      
        </Auxiliary>
        );
        }

  
 

  export default Footer;