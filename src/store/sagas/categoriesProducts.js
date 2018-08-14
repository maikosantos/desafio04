import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as CategoriesProductsActions } from "../ducks/categoriesProducts";

export function* getCategoriesProducts() {
    try {
        const response = yield call(api.get, "/category_products/");

        yield put(
            CategoriesProductsActions.getCategoriesProductsSuccess(
                response.data
            )
        );
    } catch (error) {
        console.log(error);
    }
}
