import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, H5 } from '@blueprintjs/core';

class Contact extends Component {
  render() {
    const { articles } = this.props;
    return (
      <Card>
        <H5>
          <a href="/">Trends</a>
        </H5>
        <p>
          User interfaces that enable people to interact smoothly with data, ask better questions,
          and make better decisions.
        </p>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Button text="Explore products" />
      </Card>
    );
  }
}

const mapStateToProps = state => ({ articles: state.articles });

export default connect(mapStateToProps)(Contact);
