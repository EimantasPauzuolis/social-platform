import React, { Component } from 'react';
import {
  Button, Card, FormGroup, H2, InputGroup,
} from '@blueprintjs/core';
import { Container, Row, Col } from 'react-grid-system';

class About extends Component {
  render() {
    return (
      <Container className="py-3">
        <Row>
          <Col md={6} offset={{ md: 3 }}>
            <Card>
              <H2>Log In</H2>
              <FormGroup label="Username">
                <InputGroup leftIcon="user" />
              </FormGroup>
              <FormGroup label="Password">
                <InputGroup leftIcon="key" />
              </FormGroup>
              <Button text="Log In" icon="log-in" />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
