import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Auxiliary from '../../hoc/Auxiliary';
import CardDeck from 'react-bootstrap/CardDeck';
import TokenCard from '../../components/TokenCard/TokenCard';
import Carousel from 'react-bootstrap/Carousel';
import classes from './Home.css';
import Footer from'../../components/Footer/Footer';
import Button from 'react-bootstrap/Button';
import Architecture from '../../assets/Architecture.jpg';
import Profile from '../../assets/Profile.jpg';
import Core from '../../assets/Core.jpg';
import Value from '../../assets/Value.jpg';


const Home = (props) => {
    return (
        <Auxiliary>
        <header className={classes.header}>
            <h1>The first digital market for digital Art</h1>
            <h3>Buy, sell, collect and discover digital Art</h3>
            <Button className={classes.CtA}>Explore ></Button>
           
        </header>
        <div className={classes.container}>
            <h2> About the project</h2>
            <div className={classes.rowCarusel}>
            <Jumbotron className={classes.hero}>
            <Carousel classsName={classes.slide}>
                

                    <Carousel.Item >
                       <img src={Profile} alt="this is the first slide"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={Core} alt="this is the first slide"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={Architecture} alt="this is the first slide"/>

                    </Carousel.Item>

                </Carousel>
                <Button className={classes.CtA}>Dowload full presentation</Button>
                </Jumbotron>
               
            </div>
            <h2> category #1</h2>
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
                    </CardDeck>

                    <h2> category #2</h2>
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
                     
                    </CardDeck>
        </div>
        <Footer/>
        </Auxiliary>
    )
}

export default Home;