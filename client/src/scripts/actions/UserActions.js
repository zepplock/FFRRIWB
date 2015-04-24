'use strict';

import { Actions } from 'flummox';
import axios from 'axios';

let serverLogin = async function (apiendpoint) {
  let session = await axios.post(apiendpoint + '/login', {username: 'user1@example.com', password: 'password'});
  return session.data;
};

export class UserActions extends Actions {

  constructor(apiendpoint) {
    super();
    this.apiendpoint = apiendpoint;
  }

  async login() {
    return await serverLogin(this.apiendpoint);
  }

  async logout() {
  }
}
