'use strict';

import React from 'react';
import {Modal, Button, Input, Alert} from 'react-bootstrap';

class LoginModal extends React.Component {

  componentDidMount(){
    this.refs.username.getInputDOMNode().focus();
  }

  loginButtonPressed() {
    var username = this.refs.username.getValue();
    var password = this.refs.password.getValue();
    this.props.flux.getActions('user').loginAttempted(this.props.flux, username, password);
    this.refs.username.getInputDOMNode().focus();
  }

  render() {

    var alert = this.props.error ? <Alert bsStyle='danger'>{this.props.error}</Alert> : '';

    return (
      <Modal {...this.props} bsStyle='primary' title='Log in' animation={false}>
        <div className='modal-body'>
          <p>Please provide your username and password</p>
          {alert}
          <form className='form-horizontal'>
            <Input type='text' ref='username' defaultValue='user1@example.com' label='Username' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
            <Input type='password' ref='password' defaultValue='password' label='Password' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
          </form>
        </div>
        <div className='modal-footer'>
          <Button onClick={this.loginButtonPressed.bind(this)}>Log in</Button>
          <Button onClick={this.props.onRequestHide}>Cancel</Button>
        </div>
      </Modal>
    );
  }
}

module.exports = LoginModal;
