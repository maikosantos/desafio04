import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CategoryProductsActions } from "../../store/ducks/categoryProducts";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

import { ContainerProducts } from "./styles";

class CategoryProducts extends Component {
    componentDidMount() {
        this.loadCategoryProducts();
        //console.log(this.props.categoryProducts);
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
                    {this.props.categoryProducts.values.data.products.map(
                        product => (
                            <div>{product.id}</div>
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
