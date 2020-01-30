import React from "react";

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

    checkDrink() {
        if (this.state.cocktail1.drinks !== null && this.state.cocktail1.drinks !== undefined) {
            return ((this.state.cocktail1.drinks).map(m => m.idDrink))
        }
    }

    render() {
        return (
            <div>
                <p>

                </p>
            </div>
        );
    }
}

export default CocktailDetail;