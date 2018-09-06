import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ProductActions } from "../../store/ducks/product";
import { Creators as CartActions } from "../../store/ducks/cart";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

import { ContainerProducts, DivImage, DivInfo } from "./styles";

const intlMonetary = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimunFractionDigits: 2
});

class DetailsProduct extends Component {
    static propTypes = {
        getProductRequest: PropTypes.func.isRequired,
        addProductCart: PropTypes.func.isRequired,
        product: PropTypes.shape({
            data: PropTypes.arrayOf(
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
        this.loadProduct();
    }

    loadProduct() {
        const { id } = this.props.match.params;
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
                            {intlMonetary.format(this.props.product.data.price)}
                        </h1>
                        <Link
                            to={`/cart/`}
                            onClick={() =>
                                this.props.addProductCart(
                                    this.props.product.data.id,
                                    this.props.product.data.name,
                                    this.props.product.data.brand,
                                    this.props.product.data.image,
                                    this.props.product.data.price,
                                    1
                                )
                            }
                        >
                            <span>ADICIONAR AO CARRINHO</span>
                        </Link>
                    </DivInfo>
                </ContainerProducts>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product,
    cart: state
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ...ProductActions, ...CartActions }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsProduct);
