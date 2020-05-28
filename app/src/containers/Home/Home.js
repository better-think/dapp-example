import React from 'react';
import { NavLink } from 'react-router-dom';


import PresentationCard from '../../components/PresentationCard/PresentationCard';

import classes from './Home.css';


class Home extends React.Component {
    constructor(props) {
        super(props);

        state: { }
    }

    render() {
        return (
            <div style={{ border: '2px solid #000000', padding: '5px' }}>
                <p>Home-Container</p>
                <h1 className={classes.ProjectTitle}>Holon</h1>

                {/* divs only for showing purposes, substitute as you wish */}
                <div style={{ border: '2px solid #000000', padding: '5px', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ border: '2px solid #000000', padding: '5px' }}>What we do</div>
                    <div style={{ border: '2px solid #000000', padding: '5px' }}>Why</div>
                    <div style={{ border: '2px solid #000000', padding: '5px' }}>How</div>
                </div>
                <div style={{ border: '2px solid #000000', padding: '5px' }}>
                    <p>Preview List of Collectibles on the Store</p>
                    <NavLink to='/artwork'>
                        <PresentationCard niftyTitle='Title1' niftyDescription='Description1' />
                    </NavLink>
                    <PresentationCard niftyTitle='Title2' niftyDescription='Description2' />
                    <PresentationCard niftyTitle='Title3' niftyDescription='Description3' />
                </div>
                <div style={{ border: '2px solid #000000', padding: '5px', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ border: '2px solid #000000', padding: '5px' }}>Roadmap</div>
                    <div style={{ border: '2px solid #000000', padding: '5px' }}>Team</div>
                </div>
            </div>
        );
    }
}

export default Home;