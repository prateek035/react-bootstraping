import React, {Component} from 'react';

import {Link } from 'react-router-dom';
import {Jumbotron,Grid,Row,Col,Image,Button} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component{
    render(){
        return(
            <Grid>
                <Jumbotron>
                    <h2>Welcome to My Restaurant</h2>
                    <p>This is the perfect place wher you can find all sort of delicious stuff</p> 
                    <Link to  ="/about">
                     <Button bsStyle="primary">About </Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper" >
                        <Image src="assets/food1.jpg" circle className="profile-pic"/>
                        <h3>Thai Royale</h3>
                        <p>Hey it's the pretty dish you would have ever tasted in your life.I can bet on that!</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper" >
                        <Image src="assets/food2.jpeg" circle className="profile-pic"/>
                        <h3>Chiken Tangri</h3>
                        <p>Hey it's the pretty dish you would have ever tasted in your life.I can bet on that!</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper" >
                        <Image src="assets/food3.jpeg" circle className="profile-pic"/>
                        <h3>Indian Thali</h3>
                        <p>Hey it's the pretty dish you would have ever tasted in your life.I can bet on that!</p>
                    </Col>
                </Row>

            </Grid>
        )
    }
}