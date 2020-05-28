import React from 'react';
import Card from 'react-bootstrap/Card';

import Aux from '../../hoc/Aux';

import classes from './PresentationCard.css';


const presentationCard = (props) => {
    return (
        <Aux>
            <Card className={classes.Card}>
                <Card.Body>
                    <Card.Img variant="top" src={props.imageSrc} />
                    <Card.Text>image</Card.Text>
                    <Card.Title>{props.niftyTitle}</Card.Title>
                    <Card.Text>{props.niftyDescription}</Card.Text>
                </Card.Body>
            </Card>
        </Aux>
    )
};

export default presentationCard;