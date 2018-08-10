import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories/:id" component={Home} />
    </Switch>
);

export default Routes;
