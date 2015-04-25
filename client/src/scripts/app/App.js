'use strict';

import React from '../../../node_modules/react/addons';
import Router from 'react-router';
import FluxComponent from '../../../node_modules/flummox/component';
import axios from 'axios';
import Footer from '../components/Footer'

import UINavbar from './../components/Navbar';

const RouteHandler = Router.RouteHandler;

let App = React.createClass({

  componentDidMount() {
    axios.interceptors.request.use(function (config) {
      var session = JSON.parse(sessionStorage.getItem('session'));
      if (session) {
        config.headers = {'Authorization': session.access_token};
      }

      config.url = __APIURL__ + config.url;
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
        <Footer/>
      </div>
    );
  }
});

module.exports = App;
