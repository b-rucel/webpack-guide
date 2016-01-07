'use strict';

import './component.css';

import React from 'react';

class HelloMessage extends React.Component {
    render() {
        return (
            <h1>
                <a className="button button-primary" href="javascript:;">
                    Hello World
                </a>
            </h1>
        );
    }
}

export default HelloMessage;