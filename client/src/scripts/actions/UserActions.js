'use strict';

import { Actions } from 'flummox';
import axios from 'axios';

let serverLogin = async function (username, password) {
  let session = await axios.post('login', {username: username, password: password});
  return session.data;
};

export class UserActions extends Actions {

  constructor() {
    super();
  }

  async loginAttempted(username, password) {
    return await serverLogin(username, password);
  }

  async logoutAttempted() {
  }
}
