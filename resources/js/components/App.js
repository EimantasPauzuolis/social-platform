import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'element-theme-default';
import { Button, Message } from 'element-react';

export default class App extends Component {
    open = () => {
        Message('This is a message.');
    };

    render() {
        return (
            <div className="container">
                <Button plain={true} onClick={this.open} />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
