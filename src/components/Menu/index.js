import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CategoriesActions } from "../../store/ducks/categories";

import { Container, Nav } from "./styles";

class Menu extends Component {
    componentDidMount() {
        this.props.getCategoriesRequest();
    }

    render() {
        return (
            <Container>
                <Nav>
                    {this.props.categories.data.map(category => (
                        <li key={category.id}>
                            <Link to={`/category_products/${category.id}`}>
                                {category.title}
                            </Link>
                        </li>
                    ))}
                </Nav>
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
)(Menu);
