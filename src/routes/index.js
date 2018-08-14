import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import CategoryProducts from "../pages/categoryProducts";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category_products/:id" component={CategoryProducts} />
    </Switch>
);

export default Routes;
