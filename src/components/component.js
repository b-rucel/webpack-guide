'use strict';

import './component.css';

import React from 'react';

import imageSrc from '../images/eiffel-icon.png';

class HelloMessage extends React.Component {
    render() {
        return (
            <div id="example">
                <img src={imageSrc} />
                <h1>
                    <a className="button button-primary" href="javascript:;">
                        Hello World
                    </a>
                </h1>
            </div>
        );
    }
}

export default HelloMessage;