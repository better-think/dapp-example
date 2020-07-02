import React,{useState} from 'react';
import classes from './TokenCard.css';
import Card from 'react-bootstrap/Card';
import Auxiliary from '../../hoc/Auxiliary';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const TokenCard = (props )=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow =()=> setShow(true);

    return(
        <Auxiliary>
<a onClick={handleShow} ><Card style={{ width: '18rem' }} className={classes.Token}>
<div className={classes.top}>
                <img alt="" className={classes.Img} src=""/> 
                </div>
    <Card.Body className={classes.body}>
       
        <Card.Text>
                Some quick example text to build on the card title 
         </Card.Text>
    
    </Card.Body>
</Card></a>


<Modal show={show} onHide={handleClose}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Token #
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <img></img>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
      
      </Modal.Footer>
    </Modal>
</Auxiliary>

    )
};
 export default TokenCard;