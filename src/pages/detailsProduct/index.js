import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ProductActions } from "../../store/ducks/product";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

import { ContainerProducts, DivImage, DivInfo } from "./styles";

class DetailsProduct extends Component {
    componentDidMount() {
        this.loadProduct();
    }

    loadProduct() {
        const { id } = this.props.match.params;
        console.log(id);
        this.props.getProductRequest(id);
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Menu />
                <ContainerProducts>
                    <DivImage>
                        <img
                            src={this.props.product.data.image}
                            alt="Product"
                        />
                    </DivImage>
                    <DivInfo>
                        <strong>{this.props.product.data.name}</strong>
                        <small>{this.props.product.data.brand}</small>
                        <h1>
                            R$
                            {this.props.product.data.price}
                        </h1>
                        <Link to={`/products/${this.props.product.data.id}`}>
                            <span>ADICIONAR AO CARRINHO</span>
                        </Link>
                    </DivInfo>
                </ContainerProducts>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(ProductActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsProduct);
