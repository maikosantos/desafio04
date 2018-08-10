export const Types = {
    GET_REQUEST: "categoriesProducts/GET_REQUEST",
    GET_SUCCESSS: "categoriesProducts/GET_SUCCESS"
};

const INITIAL_STATE = {
    data: [],
    loading: false
};

export default function categoriesProducts(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_REQUEST:
            return { ...state, loading: true };
        case Types.GET_SUCCESSS:
            return { ...state, loading: false, data: action.payload.data };
        default:
            return state;
    }
}

export const Creators = {
    getCategoriesProductsRequest: () => ({ type: Types.GET_REQUEST }),

    getCategoriesProductsSuccess: data => ({
        type: Types.GET_SUCCESSS,
        payload: { data }
    })
};
