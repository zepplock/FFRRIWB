'use strict';

import { Actions } from 'flummox';
import axios from 'axios';

let serverLogin = async function () {
  let session = await axios.post('login', {username: 'user1@example.com', password: 'password'});
  return session.data;
};

export class UserActions extends Actions {

  constructor() {
    super();
  }

  async login() {
    return await serverLogin();
  }

  async logout() {
  }
}
