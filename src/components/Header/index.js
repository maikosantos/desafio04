import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CategoriesActions } from "../../store/ducks/categories";
import { Creators as CartActions } from "../../store/ducks/cart";

import ShoppingCart from "../../assets/images/shopping-cart.png";

import { Container, Logo, Carrinho } from "./styles";

class Header extends Component {
    render() {
        return (
            <Container>
                <Logo>
                    <h1>
                        <Link to="/">GoCommerce</Link>
                    </h1>
                </Logo>

                <Carrinho>
                    <img src={ShoppingCart} alt="ShoppingCart" />
                    <Link to={`/cart/`}>
                        Meu carrinho ({this.props.cart.items.length})
                    </Link>
                </Carrinho>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    cart: state.cart
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ...CartActions, ...CategoriesActions }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
