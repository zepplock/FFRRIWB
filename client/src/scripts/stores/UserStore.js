'use strict';

import { Store } from 'flummox';
import Immutable from 'immutable';

export class UserStore extends Store {

  constructor(flux) {
    super();

    this.setState(JSON.parse(sessionStorage.getItem('session')));

    const actionIds = flux.getActionIds('user');
    this.register(actionIds.loginAttempted, (session) => {
      if (session.access_token) {
        this.setState(session);
        resetErrors();
        sessionStorage.setItem('session', JSON.stringify(session));
      }
    });

    this.register(actionIds.loginFailed, (error) => {
      this.setState({error: ('Login failed with error: ' + error.status)});
    });

    this.register(actionIds.logoutAttempted, () => {
      this.setState(null);
      resetErrors();
      sessionStorage.removeItem('session');
    });

  }

  getSession() {
    return this.state;
  }

  resetErrors(){
    this.setState({error: ''});
  }

  isLoggedIn() {
    return sessionStorage.getItem('session') !== null;
  }
}
