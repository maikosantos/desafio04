import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CartActions } from "../../store/ducks/cart";

import Menu from "../../components/Menu";
import Header from "../../components/Header";

import { ContainerItems, RowsItem, DivProduct, DivImage } from "./styles";

import RemoveIcon from "../../assets/images/remove.svg";

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
                                            <img src={item.image} alt="image" />
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
                                            R$
                                            {item.price}
                                        </span>
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <span>
                                            R$
                                            {item.price}
                                        </span>
                                    </td>
                                    <td>
                                        <button onClick={() => alert(item.id)}>
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
