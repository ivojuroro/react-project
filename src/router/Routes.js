import React from 'react';


import {Switch, Route} from "react-router-dom";
import Home from './../pages/Home';
import AllCocktails from "../pages/AllCocktails";
import RandomCocktail from "../pages/RandomCocktail";
import SelectedCocktailDetails from "../pages/SelectedCocktailDetails";


let Routes = (props) =>
    <Switch>
        <Route path={"/react-project"}>
            <Home/>
        </Route>
        <Route path={"/allCocktails"}>
            <AllCocktails/>
        </Route>
        <Route path={"/surpriseMe"}>
            <RandomCocktail/>
        </Route>
        <Route path={"/cocktail/:id"} component={SelectedCocktailDetails}/>
    </Switch>;

export default Routes;