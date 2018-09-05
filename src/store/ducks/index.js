import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

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
    cart,
    loadingBar: loadingBarReducer
});
