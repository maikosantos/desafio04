import { all, takeLatest } from "redux-saga/effects";

import { Types as CategoriesTypes } from "../ducks/categories";
import { Types as CategoriesProductsTypes } from "../ducks/categoriesProducts";
import { getCategories } from "./categories";
import { getCategoriesProducts } from "./categoriesProducts";

export default function* rootSaga() {
    yield all([
        takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
        takeLatest(CategoriesProductsTypes.GET_REQUEST, getCategoriesProducts)
    ]);
}
