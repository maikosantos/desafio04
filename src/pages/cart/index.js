import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CartActions } from "../../store/ducks/cart";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

import { ContainerItems } from "./styles";

class Cart extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Menu />
                <ContainerItems>
                    {this.props.cart.items.map(item => (
                        <div key={item.id}>{item.name}</div>
                    ))}
                </ContainerItems>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
