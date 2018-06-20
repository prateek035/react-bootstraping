import React, {Component} from 'react';
import './News.css';
import{Grid,Row,Col,Image} from 'react-bootstrap';

import './News.css';

export default class News extends Component{
    render(){
        return(
           <div>
           <Image src="assets/restaurant.jpg" className="header-image" />
           <Grid>
                <h2>News</h2>
                <Row>
                    <Col xs={12} sm={8} className="main-section">
                    <p>A little happy sunlight shining through there. We have no limits to our world. We're only limited by our imagination. Let's do that again. Even trees need a friend. We all need friends.</p>
                    <p>Brown is such a nice color. Just pretend you are a whisper floating across a mountain. Of course he's a happy little stone, cause we don't have any other kind.</p>
                    <p>I thought today we would make a happy little stream that's just running through the woods here. You're meant to have fun in life. If you hypnotize it, it will go away.</p>
                    <p>The light is your friend. Preserve it. We have a fantastic little sky! Maybe he has a little friend that lives right over here. See there how easy that is. When you do it your way you can go anywhere you choose.</p>
                    <p>Be careful. You can always add more - but you can't take it away. Everyone is going to see things differently - and that's the way it should be. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. That's a crooked tree. We'll send him to Washington.</p>
                    <p>How do you make a round circle with a square knife? That's your challenge for the day. If you've been in Alaska less than a year you're a Cheechako. The only prerequisite is that it makes you happy. If it makes you happy then it's good. We'll paint one happy little tree right here. Use your imagination, let it go.</p>
                    <p>This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart. I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. Nice little clouds playing around in the sky.</p>
                    </Col>
                    <Col xs={12} sm={4} className="sidebar-section">
                    <Image src="assets/bar.jpeg" />
                    <p>I speend some tie to buid this product .Hope you would appriciate my effort </p>
                    </Col>

                </Row>
            </Grid>
            </div>
        )
    }
}