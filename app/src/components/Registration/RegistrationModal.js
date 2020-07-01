import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';

import Aux from '../../hoc/Aux';

import classes from './RegistrationModal.css';

const RegistrationModal =()=> {
  const [show, setShow] = useState();

   const handleClose = () => setShow(false);
   const handleShow =()=> setShow(true);

        return (
            <Aux>
      
      <Button variant="primary" onClick={handleShow}>
       Register | wallet
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </Aux>
        );
        }

  
 

  export default RegistrationModal;