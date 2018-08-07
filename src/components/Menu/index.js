import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CategoriesActions } from "../../store/ducks/categories";

// import styles from './styles';

class Menu extends Component {
    componentDidMount() {
        this.props.getCategoriesRequest();
        console.log(this.props.categories);
    }

    render() {
        return (
            <nav>
                {this.props.categories.data.map(category => (
                    <li key={category.id}>
                        <Link to={`categories/${category.id}`}>
                            {category.title}
                        </Link>
                    </li>
                ))}
            </nav>
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
