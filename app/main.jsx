import './styles/main.css';

import React from 'react';

var Router = require('react-router');
var routes = require('./config/routes');

const app = document.createElement('div');
document.body.appendChild(app);

Router.run(routes, function (Handler, state) {
  React.render(<Handler pathname={state.pathname} />, app);
});