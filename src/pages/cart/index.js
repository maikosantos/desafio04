import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CartActions } from "../../store/ducks/cart";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

import {
    ContainerItems,
    RowsItem,
    DivProduct,
    DivImage,
    ContainerTotal
} from "./styles";

import RemoveIcon from "../../assets/images/remove.svg";

const intlMonetary = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimunFractionDigits: 2
});

class Cart extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Menu />
                <ContainerItems cellPadding={0} cellSpacing={0}>
                    <thead>
                        <th />
                        <th
                            style={{
                                textAlign: "left"
                            }}
                        >
                            PRODUTO
                        </th>
                        <th>VALOR</th>
                        <th>QTDE</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </thead>
                    <tbody>
                        {this.props.cart.items.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={5}
                                    style={{
                                        color: "#D45454",
                                        textAlign: "center"
                                    }}
                                >
                                    <h1>Nenhum item no carrinho!</h1>
                                </td>
                            </tr>
                        ) : (
                            this.props.cart.items.map(item => (
                                <RowsItem key={item.id}>
                                    <td>
                                        <DivImage>
                                            <img src={item.image} alt="img" />
                                        </DivImage>
                                    </td>

                                    <td>
                                        <DivProduct>
                                            <strong>{item.name}</strong>
                                            <small>{item.brand}</small>
                                        </DivProduct>
                                    </td>
                                    <td>
                                        <span>
                                            {intlMonetary.format(item.price)}
                                        </span>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={item.qtd}
                                            onChange={e =>
                                                this.props.addQtdProductCart(
                                                    item.id,
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </td>
                                    <td>
                                        <span>
                                            {intlMonetary.format(item.subtotal)}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                this.props.removeProductCart(
                                                    item.id
                                                )
                                            }
                                        >
                                            <img
                                                src={RemoveIcon}
                                                alt="Remove"
                                            />
                                        </button>
                                    </td>
                                </RowsItem>
                            ))
                        )}
                    </tbody>
                </ContainerItems>
                {this.props.cart.items.length > 0 ? (
                    <ContainerTotal>
                        <div>
                            <span>TOTAL</span>
                        </div>
                        <div>
                            <span>{intlMonetary.format(this.props.total)}</span>
                        </div>
                    </ContainerTotal>
                ) : (
                    <Fragment />
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    total: state.cart.items.reduce(
        (subtotal, item) => subtotal + item.subtotal,
        0
    )
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
