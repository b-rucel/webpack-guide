'use strict';

require('./styles/normalize.css');
require('./styles/skeleton.css');

var React = require('react');
var ReactDOM = require('react-dom');

var Component = require('./components/component');

ReactDOM.render(
    <Component />,
    document.getElementById('app')
);