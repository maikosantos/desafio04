import { combineReducers } from "redux";

import categories from "./categories";
import categoriesProducts from "./categoriesProducts";
import categoryProducts from "./categoryProducts";

export default combineReducers({
    categories,
    categoriesProducts,
    categoryProducts
});
