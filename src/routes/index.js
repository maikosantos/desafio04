import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import CategoryProducts from "../pages/categoryProducts";
import DetailsProduct from "../pages/detailsProduct";
import Cart from "../pages/cart";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category_products/:id" component={CategoryProducts} />
        <Route path="/products/:id" component={DetailsProduct} />
        <Route path="/cart/" component={Cart} />
    </Switch>
);

export default Routes;
