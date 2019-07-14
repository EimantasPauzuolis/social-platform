import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'element-theme-default';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import About from "./About";
import Contact from "./Contact";
import {Provider} from "react-redux";
import store from "../store/index";

class App extends Component {

    render() {

        return (
            <div className="container">
                <Provider store={store}>
                    <Router>
                        <Link to="/about">Page 1</Link>
                        <Link to="/contact">Page 2</Link>
                        <div>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                        </div>
                    </Router>
                </Provider>,

            </div>
        );
    }
}


if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}


