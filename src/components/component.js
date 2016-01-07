'use strict';

var React = require('react');

var HelloMessage = React.createClass({
    render: function() {
        return (
            <h1>
                <a className="button button-primary" href="javascript:;">
                    Hello World
                </a>
            </h1>
        );
    }
});

module.exports = HelloMessage;