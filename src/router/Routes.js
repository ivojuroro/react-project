import React from 'react';


import {Switch, Route} from "react-router-dom";
import Home from './../pages/Home';
import AllCocktails from "../pages/AllCocktails";
import CocktailDetail from "../pages/CocktailDetails";
import axios from "axios";


let getCocktail=()=>
    console.log("entro")
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php" , {
        headers: {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "5480d6b126mshfd28d4a2de5903cp1f87b0jsn25a6cbaf8821"
        }
    }).then(res => {
        console.log(res.data)
       return res.data


    });


let Routes = (props) =>
    <Switch>
        <Route path={"/home"}>
            <Home/>
        </Route>
        <Route path={"/allCocktails"}>
            <AllCocktails/>
        </Route>
        <Route path={"/surpriseMe"}>
            <CocktailDetail cocktail={getCocktail}/>
        </Route>
    </Switch>;

export default Routes;