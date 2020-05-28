import React from 'react';
import Card from 'react-bootstrap/Card';

import Aux from '../../hoc/Aux';

import classes from './MintCard.css';


const mintCard = (props) => {
    // The following functions are re-defined inside this component,
    // by doing so React won't do useless re-renderings
    const _onNameChange = event => props.onNameChange(event, props.id);
    const _onDescrChange = event => props.onDescrChange(event, props.id);
    const _onImageChange = event => props.onImageChange(event, props.id);

    return (
        <Aux>
            <Card className={classes.Card}>
                <Card.Body>
                    <Card.Img variant="top" src={props.imageSrc} />
                    <Card.Title>
                        <input type='text' required
                            placeholder='Enter Collectible Name'
                            onChange={_onNameChange} />
                    </Card.Title>
                    <Card.Text>
                        <input type='text'
                            placeholder='Enter Collectible Description (optional)'
                            onChange={_onDescrChange} />
                    </Card.Text>
                    <input type="file" required
                        onChange={_onImageChange} />
                </Card.Body>
            </Card>
        </Aux>
    )
};

export default mintCard;