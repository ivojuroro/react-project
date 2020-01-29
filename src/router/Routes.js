import React from 'react';


import {Switch, Route} from "react-router-dom";
import Home from './../pages/Home';

import Ndd from './../pages/Ndd';

let Routes = (props) =>
    <Switch>
        <Route path={"/home"}>
            <Home/>
        </Route>
    </Switch>;

export default Routes;