'use strict';

import React from 'react';
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;

class LoginModal extends React.Component {

  componentDidMount(){
    this.refs.username.getInputDOMNode().focus();
  }

  logIn() {
    var username = this.refs.username.getValue();
    var password = this.refs.password.getValue();
    this.props.flux.getActions('user').login(username, password);
  }

  render() {
    return (
      <Modal {...this.props} bsStyle='primary' title='Log in' animation={false}>
        <div className='modal-body'>
          <p>Please provide your username/email and password</p>
          <form className='form-horizontal'>
            <Input type='text' ref='username' label='Username' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
            <Input type='password' ref='password' label='Password' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
          </form>
        </div>
        <div className='modal-footer'>
          <Button onClick={this.logIn.bind(this)}>Log in</Button>
          <Button onClick={this.props.onRequestHide}>Cancel</Button>
        </div>
      </Modal>
    );
  }
}

module.exports = LoginModal;
