import { combineReducers } from "redux";

import categories from "./categories";
import categoriesProducts from "./categoriesProducts";

export default combineReducers({
    categories,
    categoriesProducts
});
