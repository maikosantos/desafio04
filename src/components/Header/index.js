import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CategoriesActions } from "../../store/ducks/categories";

import ShoppingCart from "../../assets/images/shopping-cart.png";

import { Container, Logo, Carrinho } from "./styles";

class Header extends Component {
    componentDidMount() {
        //this.props.getCategoriesRequest();
        //console.log(this.props.categories);
    }

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
                    <span>Meu carrinho (3)</span>
                </Carrinho>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CategoriesActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
