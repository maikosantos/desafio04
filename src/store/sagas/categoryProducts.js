import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as CategoryProductsActions } from "../ducks/categoryProducts";

export function* getCategoryProducts(action) {
    try {
        const response = yield call(
            api.get,
            `/category_products/${action.payload.id}`
        );

        yield put(
            CategoryProductsActions.getCategoryProductsSuccess(response.data)
        );
    } catch (error) {
        console.log(error);
    }
}
