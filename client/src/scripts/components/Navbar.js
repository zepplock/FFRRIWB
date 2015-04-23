'use strict';

import React from '../../../node_modules/react/addons';
import {Link, State} from 'react-router';

const cx = React.addons.classSet;

const TodoNavItem = React.createClass({
    mixins: [State],
    render() {
        if (this.props.flux.getStore('user').isLoggedIn()) {
            return (
                <ul className="nav navbar-nav">
                    <li className={cx({active: this.isActive('todos')})}><Link to="todos">Todos</Link></li>
                </ul>
            );
        }
        else{
            return (<div/>);
        }
    }
});

let UINavbar = React.createClass({
    mixins: [State],
    loginlogout: function (e) {
        if (this.props.flux.getStore('user').isLoggedIn()) {
            this.props.flux.getActions('user').logout();
        } else {
            this.props.flux.getActions('user').login();
        }

        e.preventDefault();
    },
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
                        <Link to="home" className="navbar-brand"><img src="/assets/z.gif"
                                                                      style={{height: '40px', position: 'absolute', top: '5px'}}/>

                            <div style={{marginLeft: '80px', fontSize: '1.3em'}}>FFRRIWB</div>
                        </Link>
                    </div>

                    <TodoNavItem {...this.props}/>

                    <ul className="nav navbar-nav">
                        <li className={cx({active: this.isActive('stories')})}><Link to="stories">Stories</Link></li>
                    </ul>

                    <ul className="nav navbar-nav pull-right">
                        <li><a href="#" onClick={this.loginlogout}>{loginButton}</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = UINavbar;
