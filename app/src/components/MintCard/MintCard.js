import React from 'react';
import Card from 'react-bootstrap/Card';

import Aux from '../../hoc/Auxiliary';

import classes from './MintCard.css';


const mintCard = (props) => {
    const _onNameChange = event => props.onNameChange(event, props.id);
    const _onDescrChange = event => props.onDescrChange(event, props.id);
    const _onImageChange = event => props.onImageChange(event, props.id);

    return (
        <Aux>
             <Card className={classes.Card}>
                
                <div className={classes.top}>
                <img alt="" className={classes.img} src={props.imageSrc}/> 
                </div>
                <Card.Title>
                    <input type='text' required
                        placeholder='Enter Coxectible Name'
                        onChange={_onNameChange} />
                </Card.Title>
                <Card.Text>
                    <input type='text'
                        placeholder='Enter Collectible Description (optional)'
                        onChange={_onDescrChange} />
                </Card.Text>
                <input type="file" id="file" required className={classes.path}
                    onChange={_onImageChange} />
               <label htmlFor="file" className={classes.cardLabel}>choose a file</label>
            
        </Card>
        </Aux>
    )
};

export default mintCard;