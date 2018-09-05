import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { Creators as CategoriesActions } from "../ducks/categories";

export function* getCategories() {
    try {
        yield put(showLoading());
        const response = yield call(api.get, "/categories");

        yield put(CategoriesActions.getCategoriesSuccess(response.data));
    } catch (error) {
        console.log(error);
    } finally {
        yield put(hideLoading());
    }
}
