'use strict';

import { Store } from 'flummox';

export class UserStore extends Store {

  constructor(flux) {
    super();

    this.setState(JSON.parse(sessionStorage.getItem('session')));

    const actionIds = flux.getActionIds('user');
    this.register(actionIds.loginAttempted, (session) => {
      if (session.access_token) {
        this.setState(session);
        this.setState({error: ''});
        sessionStorage.setItem('session', JSON.stringify(session));
      }
    });

    this.register(actionIds.loginFailed, (error) => {
      var errorMessage = error.status === 401? 'wrong username or password' : 'unknown error, please try again';
      this.setState({error: ('Login failed with error: ' + errorMessage)});
    });

    this.register(actionIds.logoutAttempted, () => {
      this.setState({});
      this.setState({error: ''});
      sessionStorage.removeItem('session');
    });

  }

  getSession() {
    return this.state;
  }

  isLoggedIn() {
    return sessionStorage.getItem('session') !== null;
  }
}
