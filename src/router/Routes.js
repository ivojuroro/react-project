import React from 'react';


import {Switch, Route} from "react-router-dom";
import Home from './../pages/Home';
import AllCocktails from "../pages/AllCocktails";
import RandomCocktail from "../pages/RandomCocktail";


let Routes = (props) =>
    <Switch>
        <Route path={"/home"}>
            <Home/>
        </Route>
        <Route path={"/allCocktails"}>
            <AllCocktails/>
        </Route>
        <Route path={"/surpriseMe"}>
            <RandomCocktail />
        </Route>
    </Switch>;

export default Routes;