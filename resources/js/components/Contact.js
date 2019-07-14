import React, {Component} from 'react';
import {connect} from "react-redux";

class Contact extends Component {

    render() {
        const { articles } = this.props;
        return (
            <div>
                Page 2
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { articles: state.articles };
};

export default connect(mapStateToProps)(Contact);

