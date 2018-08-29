import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CartActions } from "../../store/ducks/cart";

const Cart = ({ cart }) => <h1> {cart.items.length}</h1>;

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
