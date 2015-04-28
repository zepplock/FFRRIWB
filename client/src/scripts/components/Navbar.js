'use strict';

import React from 'react';
import {Link, State} from 'react-router';

class TodoNavItem extends React.Component{
  render() {
    if (this.props.flux.getStore('user').isLoggedIn()) {
      return (
        <ul className="nav navbar-nav">
          <li><Link to="todos">Todos</Link></li>
        </ul>
      );
    }
    else {
      return (<div/>);
    }
  }
}

class UINavbar extends React.Component {

  loginlogout(e) {
    e.preventDefault();

    if (this.props.flux.getStore('user').isLoggedIn()) {
      this.props.flux.getActions('user').logout();
    } else {
      this.props.flux.getActions('user').login();
    }

  }

  render() {

    var loginButton;
    if (this.props.flux.getStore('user').isLoggedIn()) {
      loginButton = 'Logout';
    } else {
      loginButton = 'Login';
    }

    return (
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <Link to="home" className="navbar-brand">
              <img src="/assets/z.gif" style={{height: '40px', position: 'absolute', top: '5px'}}/>
              <div style={{marginLeft: '80px', fontSize: '1.3em'}}>FFRRIWB</div>
            </Link>
          </div>

          <TodoNavItem {...this.props}/>

          <ul className="nav navbar-nav">
            <li><Link to="stories">Stories</Link></li>
          </ul>

          <ul className="nav navbar-nav pull-right">
            <li><a href="#" onClick={this.loginlogout.bind(this)}>{loginButton}</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

UINavbar.contextTypes = {
  router: React.PropTypes.func
};

module.exports = UINavbar;
