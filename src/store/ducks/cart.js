import update from "react-addons-update";
import _ from "lodash";

export const Types = {
    ADD_ITEM: "cart/ADD_ITEM",
    ADD_QTDITEM: "cart/ADD_QTDITEM",
    REMOVE_ITEM: "cart/REMOVE_ITEM"
};

const INITIAL_STATE = {
    items: []
};

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_ITEM:
            const item = _.findKey(state.items, ["id", action.payload.id]);

            if (!item) {
                return {
                    ...state,
                    items: [
                        ...state.items,
                        {
                            id: action.payload.id,
                            name: action.payload.name,
                            brand: action.payload.brand,
                            image: action.payload.image,
                            price: action.payload.price,
                            qtd: action.payload.qtd,
                            subtotal: action.payload.price
                        }
                    ]
                };
            } else {
                return state;
            }

        case Types.ADD_QTDITEM:
            const i = _.findKey(state.items, ["id", action.payload.id]);

            if (i) {
                return update(state, {
                    items: {
                        [i]: {
                            qtd: { $set: action.payload.qtd },
                            subtotal: {
                                $set: action.payload.qtd * state.items[i].price
                            }
                        }
                    }
                });
            }

            return state;

        case Types.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(
                    product => product.id !== action.payload.id
                )
            };
        default:
            return state;
    }
}

export const Creators = {
    addProductCart: (id, name, brand, image, price, qtd) => ({
        type: Types.ADD_ITEM,
        payload: { id, name, brand, image, price, qtd }
    }),

    addQtdProductCart: (id, qtd) => ({
        type: Types.ADD_QTDITEM,
        payload: { id, qtd }
    }),

    removeProductCart: id => ({
        type: Types.REMOVE_ITEM,
        payload: { id }
    })
};
