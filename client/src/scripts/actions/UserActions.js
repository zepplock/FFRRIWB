'use strict';

import { Actions } from 'flummox';
import axios from 'axios';

let serverLogin = async function (flux, username, password) {
  try {
    var session = await axios.post('login', {username: username, password: password});
  } catch (error){
    flux.getActions('user').loginFailed(error);
  }
  return session.data;
};

export class UserActions extends Actions {

  constructor() {
    super();
  }

  async loginAttempted(flux, username, password) {
    return await serverLogin(flux, username, password);
  }

  loginFailed(error) {
    return error;
  }

  async logoutAttempted() {
  }
}
