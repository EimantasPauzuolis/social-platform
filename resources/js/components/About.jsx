import React, { Component } from 'react';
import { Button, Card, H5 } from '@blueprintjs/core';

class About extends Component {
  render() {
    return (
      <div>
        <Card>
          <H5>
            <a href="/">Analytical applications</a>
          </H5>
          <p>
            User interfaces that enable people to interact smoothly with data, ask better questions,
            and make better decisions.
          </p>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Button text="Explore products" />
        </Card>
      </div>
    );
  }
}

export default About;
