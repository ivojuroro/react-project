import React from 'react';
import {Parallax} from "react-parallax";

import './../styles/HomeParallax.css'
import {Container} from "react-bootstrap";

const firstImage = "https://images.unsplash.com/photo-1560508180-03f285f67ded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const secondImage = "white";

const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

const headerStyle = {
    backgroundSize: "cover"
};


const HomeParallax = () => (
    <div>
        <Parallax bgImage={firstImage} strength={500} style={headerStyle}>
            <div id="text-parallax">
                <p style={insideStyles}>COCKTAILS</p>
            </div>
        </Parallax>
        <Container id="text-container">
            <div id="text-introduction">Welcome to TheCocktailDB
                An open, crowd-sourced database of drinks and cocktails from around the world.
                We also offer a free JSON API for anyone wanting to use it.
                If you like the site, please consider supporting us on Patreon by clicking the link below...
            </div>
        </Container>
        <Parallax
            bgImage={secondImage}
            strength={500}
            renderLayer={percentage => (
                <div>
                    <div
                        style={{
                            position: "absolute",
                            background: `rgba(255, 166, 166, ${percentage * 1})`,
                            left: "50%",
                            top: "50%",
                            borderRadius: "50%",
                            transform: "translate(-50%,-50%)",
                            width: percentage * 500,
                            height: percentage * 500
                        }}
                    />
                </div>
            )}
        >
            <div id="text-second-parallex">
                <div style={insideStyles}>Be the best barman among your friends!</div>
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