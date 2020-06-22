import React from 'react';

// import Collectible from '../../components/Collectible/Collectible';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PageItem from 'react-bootstrap/PageItem'


import classes from './Store.css';


class Store extends React.Component {
    constructor(props) {
        super(props);
// eslint-disable-next-line
        state: {}
    }

    render() {
        return(
            <div className={classes.container}>
                <nav className={classes.filter}> 
                <Form className={classes.searchForm}>
                     <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                        <Form.Label>category</Form.Label>
                        <Form.Control as="select" custom>
                        <option>photography</option>
                        <option>cartoon</option>
                        <option>modern art</option>
                        <option>nature</option>
                        <option>other</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicRangeCustom">
                        <Form.Label>prize</Form.Label>
                        <Form.Control type="range" custom />
                    </Form.Group>

                    
                        <input  type="text" placeholder="Search" className=" mr-sm-2" />
                        <Button type="submit">Submit</Button>
                 </Form>
                </nav>


            <div className={classes.storewrap}>
                <CardDeck className={classes.deck}>
                <Card className={classes.Card}>
                
                <div className={classes.top}>
                <img  className={classes.img} src='/'/> 
                </div>
                <Card.Title>
                    Lyllipuff
                </Card.Title>
                <Card.Text>
                This card has supporting text below as a natural lead-in
                </Card.Text>
                <input type="file" id="file" required className={classes.path}
                     />
               <label for="file">take a look</label>
            
        </Card>

        <Card className={classes.Card}>
                
                <div className={classes.top}>
                <img  className={classes.img} src='/'/> 
                </div>
                <Card.Title>
                    Lyllipuff
                </Card.Title>
                <Card.Text>
                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                </Card.Text>
                <input type="file" id="file" required className={classes.path}
                     />
               <label for="file">take a look</label>
            
        </Card>
        <Card className={classes.Card}>
                
                <div className={classes.top}>
                <img  className={classes.img} src='/'/> 
                </div>
                <Card.Title>
                    Lyllipuff
                </Card.Title>
                <Card.Text>
                This card has supporting text
                </Card.Text>
                <input type="file" id="file" required className={classes.path}
                     />
               <label for="file">take a look</label>
            
        </Card>
        <Card className={classes.Card}>
                
                <div className={classes.top}>
                <img className={classes.img} src='/'/> 
                </div>
                <Card.Title>
                    Lyllipuff
                </Card.Title>
                <Card.Text>
                This card has supporting text below as a natural lead-in
                </Card.Text>
                <input type="file" id="file" required className={classes.path}
                     />
               <label for="file">take a look</label>
            
        </Card>
        <Card className={classes.Card}>
                
                <div className={classes.top}>
                <img  className={classes.img} src='/'/> 
                </div>
                <Card.Title>
                    Lyllipuff
                </Card.Title>
                <Card.Text>
                This card has supporting text below as a natural lead-in
                </Card.Text>
                <input type="file" id="file" required className={classes.path}
                     />
               <label for="file">take a look</label>
            
        </Card>
        <Card className={classes.Card}>
                
                <div className={classes.top}>
                <img  className={classes.img} src='/'/> 
                </div>
                <Card.Title>
                    Lyllipuff
                </Card.Title>
                <Card.Text>
                This card has supporting text below as a natural lead-in
                </Card.Text>
                <input type="file" id="file" required className={classes.path}
                     />
               <label for="file">take a look</label>
            
        </Card>
        <Card className={classes.Card}>
                
                <div className={classes.top}>
                <img  className={classes.img} src='/'/> 
                </div>
                <Card.Title>
                    Lyllipuff
                </Card.Title>
                <Card.Text>
                This card has supporting text below as a natural lead-in
                </Card.Text>
                <input type="file" id="file" required className={classes.path}
                     />
               <label for="file">take a look</label>
            
        </Card>
        <Card className={classes.Card}>
                
                <div className={classes.top}>
                <img  className={classes.img} src='/'/> 
                </div>
                <Card.Title>
                    Lyllipuff
                </Card.Title>
                <Card.Text>
                This card has supporting text below as a natural lead-in
                </Card.Text>
                <input type="file" id="file" required className={classes.path}
                     />
               <label for="file">take a look</label>
            
        </Card>
</CardDeck>


                
            </div>
            </div>
        );
    }
}

export default Store;