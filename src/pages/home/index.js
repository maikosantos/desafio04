import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CategoriesProductsActions } from "../../store/ducks/categoriesProducts";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

import { ContainerProducts } from "./styles";

const intlMonetary = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimunFractionDigits: 2
});

class Home extends Component {
    componentDidMount() {
        this.props.getCategoriesProductsRequest();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Menu />
                <ContainerProducts>
                    {this.props.categoriesProducts.data.map(categories =>
                        categories.products.map(product => (
                            <Link
                                key={product.id}
                                to={`/products/${product.id}`}
                            >
                                <img src={product.image} alt="Product" />
                                <strong>{product.name}</strong>
                                <small>{product.brand}</small>
                                <h1>{intlMonetary.format(product.price)}</h1>
                            </Link>
                        ))
                    )}
                </ContainerProducts>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    categoriesProducts: state.categoriesProducts
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CategoriesProductsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
