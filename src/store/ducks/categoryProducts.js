export const Types = {
    GET_REQUEST: "categoryProducts/GET_REQUEST",
    GET_SUCCESSS: "categoryProducts/GET_SUCCESS"
};

const INITIAL_STATE = {
    data: [],
    loading: false
};

export default function categoryProducts(state = INITIAL_STATE, action) {
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
    getCategoryProductsRequest: id => ({
        type: Types.GET_REQUEST,
        payload: { id }
    }),

    getCategoryProductsSuccess: data => ({
        type: Types.GET_SUCCESSS,
        payload: { data }
    })
};
