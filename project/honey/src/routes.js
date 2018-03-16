// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import Honey from './components/Honey';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Honey} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} status={404} />
  </Router>
);

export default Routes;
