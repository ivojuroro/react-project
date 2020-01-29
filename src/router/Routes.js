import React from 'react';


import {Switch, Route} from "react-router-dom";
import Home from './../pages/Home';
import AllCocktails from "../pages/AllCocktails";


let Routes = (props) =>
    <Switch>
        <Route path={"/home"}>
            <Home/>
        </Route>
        <Route path={"/AllCoctails"}>
            <AllCocktails/>
        </Route>
    </Switch>;

export default Routes;