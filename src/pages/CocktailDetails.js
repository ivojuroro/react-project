import React from "react";

class AllCocktails extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>{

                    this.props.cocktail.strDrink}</p>
            </div>
        );
    }
}

export default AllCocktails;