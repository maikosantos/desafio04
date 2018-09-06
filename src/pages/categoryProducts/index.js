import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CategoryProductsActions } from "../../store/ducks/categoryProducts";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

import { ContainerProducts } from "./styles";

const intlMonetary = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimunFractionDigits: 2
});

class CategoryProducts extends Component {
    static propTypes = {
        getCategoriesProductsRequest: PropTypes.func.isRequired,
        categoriesProducts: PropTypes.shape({
            product: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    brand: PropTypes.string,
                    image: PropTypes.object,
                    price: PropTypes.number
                })
            )
        }).isRequired
    };

    componentDidMount() {
        this.loadCategoryProducts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadCategoryProducts();
        }
    }

    loadCategoryProducts() {
        const { id } = this.props.match.params;
        //console.log(id);
        this.props.getCategoryProductsRequest(id);
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Menu />
                <ContainerProducts>
                    {this.props.categoryProducts.data.products &&
                        this.props.categoryProducts.data.products.map(
                            product => (
                                <Link
                                    key={product.id}
                                    to={`/products/${product.id}`}
                                >
                                    <img src={product.image} alt="Product" />
                                    <strong>{product.name}</strong>
                                    <small>{product.brand}</small>
                                    <h1>
                                        {intlMonetary.format(product.price)}
                                    </h1>
                                </Link>
                            )
                        )}
                </ContainerProducts>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    categoryProducts: state.categoryProducts
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CategoryProductsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryProducts);
