import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { Creators as CategoriesProductsActions } from "../ducks/categoriesProducts";

export function* getCategoriesProducts() {
    try {
        yield put(showLoading());
        const response = yield call(api.get, "/category_products/");

        yield put(
            CategoriesProductsActions.getCategoriesProductsSuccess(
                response.data
            )
        );
    } catch (error) {
        console.log(error);
    } finally {
        yield put(hideLoading());
    }
}
