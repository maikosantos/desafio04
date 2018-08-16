export const Types = {
    ADD_ITEM: "cart/ADD_ITEM",
    REMOVE_ITEM: "cart/REMOVE_ITEM"
};

const INITIAL_STATE = {
    items: []
};

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_ITEM:
            return {
                ...state,
                items: [...state.items, { id: action.payload.id }]
            };
        case Types.REMOVE_ITEM:
            return {
                ...state,
                items: state.data.filter(
                    product => product.id !== action.payload.id
                )
            };
        default:
            return state;
    }
}

export const Creators = {
    getCartAdd: id => ({
        type: Types.ADD_ITEM,
        payload: { id }
    }),

    getCartRemove: id => ({
        type: Types.REMOVE_ITEM,
        payload: { id }
    })
};
