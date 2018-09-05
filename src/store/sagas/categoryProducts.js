import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { Creators as CategoryProductsActions } from "../ducks/categoryProducts";

export function* getCategoryProducts(action) {
    try {
        yield put(showLoading());
        const response = yield call(
            api.get,
            `/category_products/${action.payload.id}`
        );

        yield put(
            CategoryProductsActions.getCategoryProductsSuccess(response.data)
        );
    } catch (error) {
        console.log(error);
    } finally {
        yield put(hideLoading());
    }
}
