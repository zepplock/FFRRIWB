'use strict';

import { Store } from 'flummox';
import Immutable from 'immutable';

export class UserStore extends Store {

    constructor(flux) {
        super();

        this.setState(JSON.parse(sessionStorage.getItem('session')));

        const actionIds = flux.getActionIds('user');
        this.register(actionIds.login, (session) => {
            if (session.access_token) {
                this.setState(session);
                sessionStorage.setItem('session', JSON.stringify(session));
            }
        });

        this.register(actionIds.logout, () => {
            this.setState(null);
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
