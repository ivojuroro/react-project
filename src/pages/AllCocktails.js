import React from 'react';
import {Button, Card, Col, Container, Nav, Row} from 'react-bootstrap';
import '../styles/AllCocktails.css'
import axios from "axios";


class AllCocktails extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentLetter: 'a',
            cocktails: [],
        };
        this.changeLetter = this.changeLetter.bind(this);
        this.fillCocktails = this.fillCocktails.bind(this);
        this.fillCocktails();
    }


    fillCocktails() {
        axios.get("https://the-cocktail-db.p.rapidapi.com/search.php?f=" + this.state.currentLetter, {
            headers: {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "5480d6b126mshfd28d4a2de5903cp1f87b0jsn25a6cbaf8821"
            }
        }).then(res => {
            this.setState({
                cocktails: res.data.drinks

            })


        });
        this.render();

    }

    renderCards() {
        if(this.state.currentLetter!=='x'&&this.state.currentLetter!=='u'){
            return this.state.cocktails.map((m, i) =>
                <Col lg={3} sm={12} md={6}>
                    <Card id='card' style={{width: '15rem', margin: '10px'}}>


                        <Card.Img variant="top" src={m.strDrinkThumb}/>
                        <Card.Body>
                            <Card.Title>{m.strDrink}</Card.Title>
                            <Card.Text>
                                {m.strAlcoholic}
                            </Card.Text>
                            <Button id='button'>Recipe</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        }
        else{
            return <p>There are no cocktails starting by the letter chosen</p>
        }
    }

    changeLetter(letter) {

            this.setState({
                currentLetter: letter
            })


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.currentLetter !== prevState.currentLetter && this.state.currentLetter !== 'x' && this.state.currentLetter !== 'u') {
            this.fillCocktails();
        }

    }

    renderLeters() {

        let leters = [];
        for (let i = 0; i < 27; i++) {
            leters.push(String.fromCharCode(97 + i));
        }
        leters.pop();
        return leters;
    }

    render() {

        return (
            <Container>
                <Nav variant="tabs" defaultActiveKey="/home">

                    {
                        this.renderLeters().map((letter, index) =>

                            <Nav.Item id="nav-link" onClick={() => this.changeLetter(letter)}>
                                <Nav.Link eventKey={index}>{letter}</Nav.Link>
                            </Nav.Item>
                        )

                    }

                </Nav>


                <div>
                    <Row id='row'>
                        {this.renderCards()}
                    </Row>
                </div>

            </Container>

        );


    }


}

export default AllCocktails;