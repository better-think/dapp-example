import React,{useState} from 'react';
import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems';
import Button from 'react-bootstrap/Button';
import Auxiliary from '../../../hoc/Auxiliary';
import Modal from 'react-bootstrap/Modal';
import RegistrationModal from '../../Registration/RegistrationModal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Logo from './Logo/Logo';


const Toolbar = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow =()=> setShow(true);


 
    return(
    
        <Auxiliary>
        <header className={classes.Toolbar}>
         
          <Logo click={props.SideOpen}/>
          <NavItems className={classes.items} />
          
         
         
             
 
         
          <Button  onClick={handleShow}>
         Register | wallet
        </Button>
          
      </header>
       
      <Modal show={show} onHide={handleClose}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        
          <Modal.Header closeButton>
            
          </Modal.Header>
          <Modal.Body className={classes.modalBody}>
            <div className={classes.modalLeft}>
              <h2>Are you an artist? register here!</h2>
            <Form className={classes.formBody}>
              <Form.Group controlId="formBasicEmail" className={classes.regForm}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                 
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className={classes.regForm}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
             
              <Button variant="primary" type="submit" className={classes.centerBtn}>
                Submit
              </Button>
            </Form>
            </div>
            <div className={classes.modalRight}>
              <h2> login with metamask!</h2>
              <Button variant="primary" type="submit">
                metamask
              </Button>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
          </Auxiliary>
);
    }
    
export default Toolbar;