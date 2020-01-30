import React from 'react';
import axios from "axios";
import CocktailDetail from "./CocktailDetail";
import {Container} from "react-bootstrap";

class SelectedCocktailDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            drink: ''
        }
    }

    componentDidMount() {
        console.log(this.props.location.pathname.split("/")[2]);
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.location.pathname.split("/")[2]}`)
            .then((response) => {
                this.setState({
                    drink: response.data
                })
                console.log(this.state.drink)
            });
    }

    render() {
        return (
            <Container>
                <CocktailDetail cocktail={this.state.drink}>
                </CocktailDetail>
            </Container>
        );
    }
};


export default SelectedCocktailDetails;