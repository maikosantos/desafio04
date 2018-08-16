import { combineReducers } from "redux";

import categories from "./categories";
import categoriesProducts from "./categoriesProducts";
import categoryProducts from "./categoryProducts";
import product from "./product";
import cart from "./cart";

export default combineReducers({
    categories,
    categoriesProducts,
    categoryProducts,
    product,
    cart
});
