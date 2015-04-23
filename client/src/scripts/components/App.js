'use strict';

import React from 'react/addons';
import Router from 'react-router';
import FluxComponent from 'flummox/component';
import axios from 'axios';

import UINavbar from './UI/Navbar';

const RouteHandler = Router.RouteHandler;

let App = React.createClass({

    componentDidMount() {
        axios.interceptors.request.use(function (config) {
            var session = JSON.parse(sessionStorage.getItem('session'));
            if (session) {
                config.headers = {'Authorization': session.access_token};
            }
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

    },

    render() {

        return (
            <div>
                <div className='main container'>
                    <FluxComponent {...this.props} connectToStores={['todos', 'stories', 'user']}>
                        <UINavbar {...this.props}/>
                        <RouteHandler />
                    </FluxComponent>
                </div>
                <footer>
                    <div className='container'>
                        <br/>

                        <p className="text-muted">
                            <a href="">Browse the code on <i className="fa fa-github"></i> GitHub</a>
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
});

module.exports = App;
