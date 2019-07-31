import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  Button, Navbar, NavbarDivider, NavbarGroup, NavbarHeading,
} from '@blueprintjs/core';
import About from './About';
import Contact from './Contact';
import store from '../store/index';

class App extends Component {
  render() {
    return (
      <div className="bp3-dark">
        <Provider store={store}>
          <Router>
            <Navbar>
              <NavbarGroup>
                <NavbarHeading>Blueprint</NavbarHeading>
                <NavbarDivider />
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <Button icon="home" text="Analytics" />
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <Button icon="document" text="Trends" />
                </Link>
              </NavbarGroup>
            </Navbar>


            <div>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}


if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
