import React from 'react';

// import Collectible from '../../components/Collectible/Collectible';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PageItem from 'react-bootstrap/PageItem'
import TokenCard from '../../components/TokenCard/TokenCard';
import Pagination from 'react-bootstrap/Pagination';
import classes from './Store.css';


class Store extends React.Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line
        state: { }
    }


    render() {
        return (
            <div className={classes.container}>
                
                    
                <nav className={classes.filter}>
                <Form className={classes.searchForm}>
                        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                            <Form.Label >Category</Form.Label>
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


                        <input type="text" placeholder="Search" className=" mr-sm-2" />
                        <Button type="submit" className={classes.btn}>Submit</Button>
                    </Form>

                </nav>
              

                <div className={classes.storewrap}>

                    
                    <CardDeck className={classes.deck}>
                    <TokenCard ></TokenCard>  
                    <TokenCard ></TokenCard>  
                    <TokenCard ></TokenCard>  
                    <TokenCard ></TokenCard>  
                    <TokenCard ></TokenCard>  
                    <TokenCard ></TokenCard> 
                    <TokenCard ></TokenCard>  
                    <TokenCard ></TokenCard>  
                    <TokenCard ></TokenCard>  
                    <TokenCard ></TokenCard>  
                    <TokenCard ></TokenCard>  
                    <TokenCard ></TokenCard> 
                    </CardDeck>
                    

                   
                    
                    
                  <div className={classes.pagination}>
              <Button >View more</Button>
                  </div>
                  
                </div>
            </div>
        );
    }
}

export default Store;