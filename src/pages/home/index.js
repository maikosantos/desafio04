import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CategoriesProductsActions } from "../../store/ducks/categoriesProducts";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

import { ContainerProducts } from "./styles";

//import Product from "../../assets/images/product.jpg";

class Home extends Component {
    componentDidMount() {
        this.props.getCategoriesProductsRequest();
        console.log(this.props.categoriesProducts);
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Menu />
                <ContainerProducts>
                    {this.props.categoriesProducts.data.map(categories =>
                        categories.products.map(product => (
                            <div key={product.id}>
                                {console.log(categories.id)}
                                <img src={product.image} alt="Product" />
                                <strong>{product.name}</strong>
                                <small>{product.brand}</small>
                                <h1>R${product.price}</h1>
                            </div>
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
