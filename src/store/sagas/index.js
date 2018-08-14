import { all, takeLatest } from "redux-saga/effects";

import { Types as CategoriesTypes } from "../ducks/categories";
import { Types as CategoriesProductsTypes } from "../ducks/categoriesProducts";
import { Types as CategoryProductsTypes } from "../ducks/categoryProducts";
import { getCategories } from "./categories";
import { getCategoriesProducts } from "./categoriesProducts";
import { getCategoryProducts } from "./categoryProducts";

export default function* rootSaga() {
    yield all([
        takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
        takeLatest(CategoriesProductsTypes.GET_REQUEST, getCategoriesProducts),
        takeLatest(CategoryProductsTypes.GET_REQUEST, getCategoryProducts)
    ]);
}
