import React from 'react';
import { NavLink } from 'react-router-dom';


import PresentationCard from '../../components/PresentationCard/PresentationCard';

import classes from './Store.css';


class Store extends React.Component {
    constructor(props) {
        super(props);

        state: { }
    }

    render() {
        return (
            <div style={{ border: '2px solid #000000', padding: '5px' }}>
                <p>Store Container</p>
                <p>{'arrayNifties: [{title: \'nftTitle\', description: \'nftDescription\', imgSource: \'imgSource\'}, ...]'}</p>
                <h2 className={classes.ProjectTitle}>Holon Store</h2>

                {/* divs only for showing purposes, substitute as you wish */}
                <div style={{ border: '2px solid #000000', padding: '5px' }}>
                    Query Selectors (order by newest, ecc...)
                </div>
                <div style={{ border: '2px solid #000000', padding: '5px' }}>
                    <p>List of Collectibles on the Store</p>
                    <NavLink to='/artwork'>
                        <PresentationCard niftyTitle='Title1' niftyDescription='Description1' />
                    </NavLink>
                    <PresentationCard niftyTitle='Title2' niftyDescription='Description2' />
                    <PresentationCard niftyTitle='Title3' niftyDescription='Description3' />
                    <PresentationCard niftyTitle='Title4' niftyDescription='Description4' />
                    <PresentationCard niftyTitle='Title5' niftyDescription='Description5' />
                </div>
                
            </div>
        );
    }
}

export default Store;