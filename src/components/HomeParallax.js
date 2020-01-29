import React from 'react';
import {Parallax} from "react-parallax";

import './../styles/HomeParallax.css'
import {Container} from "react-bootstrap";

const headerImage = "https://images.unsplash.com/photo-1560508180-03f285f67ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

const headerStyle ={
    backgroundSize: "cover"
};

const HomeParallax = () => (
    <div>
        <Parallax bgImage={headerImage} blur={{ min: -1, max: 3 }} style={headerStyle}>
            <div id="text-parallax">
                <div style={insideStyles}>Cocktails</div>
            </div>
        </Parallax>
        <Container id="text-container">
            <div id="text-introduction">Welcome to TheCocktailDB
                An open, crowd-sourced database of drinks and cocktails from around the world.
                We also offer a free JSON API for anyone wanting to use it.
                If you like the site, please consider supporting us on Patreon by clicking the link below...
            </div>
        </Container>
    </div>
);
export default HomeParallax;