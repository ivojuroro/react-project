import React from 'react';
import {Carousel, Container} from "react-bootstrap";

import "./../styles/CocktailsCarousel.css"
import axios from "axios";

class CocktailsCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            carouselCocktails: []
        };
        this.fillCocktails();
    }

    fillCocktails() {
        axios.get("https://the-cocktail-db.p.rapidapi.com/search.php?f=p", {
            headers: {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "5480d6b126mshfd28d4a2de5903cp1f87b0jsn25a6cbaf8821"
            }
        }).then(res => {
            this.setState({
                carouselCocktails: res.data.drinks,
            });
        });
    }

    retrieveCarouselItem() {
        return (
            this.state.carouselCocktails.slice(0, 4).map((cocktail,index) =>
                <Carousel.Item>
                    <Container id="image-carousel">
                        <img
                            className="d-block w-100"
                            src={cocktail.strDrinkThumb}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{cocktail.strDrink}</h3>
                            <p>Learn how to prepare our amazing {cocktail.strDrink}</p>
                        </Carousel.Caption>
                    </Container>
                </Carousel.Item>
            ));
    }

    render() {
        return (
            <Container id="container-carousel">
                {console.log(this.state.carouselCocktails)}
                <Carousel id="carousel">
                    {this.retrieveCarouselItem()}
                </Carousel>
            </Container>
        );
    }
}

export default CocktailsCarousel;