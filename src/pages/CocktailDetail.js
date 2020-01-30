import React from "react";
import {Col, Row, Card, Table} from 'react-bootstrap';

import './../styles/CocktailDetail.css'
import {BackSide, Flippy, FrontSide} from "react-flippy";

class CocktailDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cocktail1: props.cocktail}
    }


    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            cocktail1: nextProps.cocktail
        })
    }

    retrieveIngredients() {
        let ingredientes = [];
        let isNull = false;

        if (this.state.cocktail1.drinks !== null && this.state.cocktail1.drinks !== undefined) {


            for (let i = 1; !isNull; i++) {
                let str = ("".concat("strIngredient", i));
                let str2 = ("".concat("strMeasure", i));
                if ((this.state.cocktail1.drinks["0"])[str] !== null) {

                    console.log(this.state.cocktail1.drinks["0"]);
                    ingredientes.push(this.state.cocktail1.drinks["0"][str] + " " + this.state.cocktail1.drinks["0"][str2]);
                } else {
                    isNull = true;
                }
            }

            return ingredientes;
        }

    }

    showBackInfo() {
        if (this.state.cocktail1.drinks !== null && this.state.cocktail1.drinks !== undefined) {
            return (
                <Card id="total-card-back">
                    {console.log(this.state.cocktail1.drinks["0"])}
                    <p id={"name"}>{this.state.cocktail1.drinks["0"]["strDrink"]}</p>
                    <Row>
                        <Col md={1}/>

                        <Col md={10}>

                                <Table striped  size="sm" id='ingredientes-table'>
                                    <p id="ingredients-title">
                                        Ingredients
                                    </p>
                                    <tbody>
                                    {this.retrieveIngredients().map(ingredient =>

                                        <tr>
                                            <td><p>{ingredient}</p></td>
                                        </tr>
                                    )
                                    }
                                    </tbody>
                                </Table>
                                <p>{this.state.cocktail1.drinks["0"]["strInstructions"]}</p>

                        </Col>
                        <Col md={1}/>
                    </Row>
                </Card>
            );
        }
    }

    showDrinkInfo() {
        if (this.state.cocktail1.drinks !== null && this.state.cocktail1.drinks !== undefined) {
            return (
                (this.state.cocktail1.drinks).map(m => (
                    <Row>
                        <Col md={6}>
                            <Card.Img id="image" variant="top" src={m.strDrinkThumb}/>
                        </Col>
                        <Col md={6}>
                            <Card.Body style={{
                                top: '50%',
                                marginTop: '-150px',
                                height: '800px',
                                position: 'absolute',
                                marginLeft: '-40px'
                            }}>
                                <Card.Title
                                    style={{
                                        fontFamily: 'News Cycle, sans-serif',
                                        fontSize: '60px',
                                        color: '#ffa6a6'
                                    }}>
                                    {m.strDrink}</Card.Title>
                                <Card.Text>
                                    <p>
                                        Category: {m.strCategory}/ {m.strAlcoholic}
                                    </p>

                                    <p>
                                        Are you ready to make a great cocktail for you and your friends? Click to see
                                        the full recipe and ingredients and be the cocktails master!
                                    </p>
                                </Card.Text>

                            </Card.Body>
                        </Col>
                    </Row>
                )))
        }
    }

    render() {
        return (
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            >
                <FrontSide id="flippy-frontside">
                    <Card id="card">
                        {this.showDrinkInfo()}
                    </Card>
                </FrontSide>
                <BackSide id="flippy-backside">
                    {this.showBackInfo()}
                </BackSide>
            </Flippy>
        );
    }
}

export default CocktailDetail;