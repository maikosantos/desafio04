import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { Creators as ProductActions } from "../ducks/product";

export function* getProduct(action) {
    try {
        yield put(showLoading());
        const response = yield call(api.get, `/products/${action.payload.id}`);

        yield put(ProductActions.getProductSuccess(response.data));
    } catch (error) {
        console.log(error);
    } finally {
        yield put(hideLoading());
    }
}
