import React from 'react';

import "./../styles/CocktailsCarousel.css";
import CockatilDetail from './CocktailDetail'
import axios from "axios";
import {Container} from "react-bootstrap";

class RandomCocktail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cocktail: ""
        };
        this.getCocktail = this.getCocktail.bind(this);

    }

    getCocktail() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(res => {
                this.setState({
                    cocktail: res.data
                });
            }
        ).catch(error => {
            console.log(error)
        })
        ;
    }

    componentWillMount() {
        this.getCocktail();
    }

    render() {
        return (
            <Container>
                <CockatilDetail cocktail={this.state.cocktail}>
                </CockatilDetail>
            </Container>

        );
    }
}

export default RandomCocktail;