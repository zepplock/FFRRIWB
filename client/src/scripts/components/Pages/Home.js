'use strict';

import React from 'react';
import UIPageHeader from '../PageHeader';

const Username = React.createClass({
  render() {
    if (this.props.flux.getStore('user').isLoggedIn()) {
      return (
        <span>{this.props.flux.getStore('user').getSession().username}</span>
      );
    }
    else {
      return (<span>guest</span>);
    }
  }
});

let HomePage = React.createClass({
  render() {
    return (
      <div>
        <h3>Welcome, <Username {...this.props}/>.</h3>

        <p>FFRRIWB = Flux/Flummox, React/Router, Immutable, Webpack, Babel</p>

        <p><h4>Currently, it uses:</h4></p>

        <ul>
          <li><a href="http://facebook.github.io/react/">React</a> with <a
            href="https://facebook.github.io/jsx/">JSX</a>;
          </li>
          <li><a href="https://github.com/acdlite/flummox">Flummox</a> (<a href="http://facebook.github.io/flux/">Flux
            implementation</a>) for the stores;
          </li>
          <li><a href="https://github.com/rackt/react-router">React-Router</a>;</li>
          <li><a href="http://facebook.github.io/immutable-js/">Immutable.js</a> for immutability in the stores;</li>
          <li><a href="https://babeljs.io/">Babel</a> for ES6/ES7 transpilation and linting;</li>
          <li><a href="http://webpack.github.io/">Webpack</a> for the tooling.</li>
        </ul>

        <hr/>

        <p>
          (Loosely) Based on <a href='https://github.com/netgusto/IdiomaticReact'>Idiomatic React</a>
          <h4>What was added/perfected:</h4>
          <ul>
            <li>Flummox used to simplify Flux</li>
            <li>Login modal dialog</li>
            <li>Token based authentication to a (Rails) API</li>
            <li>Async success/failure action handling</li>
            <li>React-bootstrap used to simplify UI</li>
            <li>Moved some objects to have ES6/ES7 style</li>
            <li>Full login/logout action/store/UI logic</li>
            <li>Example of access to private/public APIs, CRUD operations</li>
          </ul>
        </p>
      </div>
    );
  }
});

module.exports = HomePage;
