'use strict';

import { Flux } from 'flummox';
import Immutable from 'immutable';

import { TodoActions } from '../actions/TodoActions';
import { TodoStore } from '../stores/TodoStore';
import { StoryActions } from '../actions/StoryActions';
import { StoryStore } from '../stores/StoryStore';
import { UserActions } from '../actions/UserActions';
import { UserStore } from '../stores/UserStore';

export class AppFlux extends Flux {

    constructor(config) {
        super();

        this.config = Immutable.fromJS(config);

         // The extra argument(s) are passed to the Action / Store constructors
        this.createActions('todos', TodoActions, this.getApiendpoint());
        this.createStore('todos', TodoStore, this);
        this.createActions('stories', StoryActions, this.getApiendpoint());
        this.createStore('stories', StoryStore, this);
        this.createActions('user', UserActions, this.getApiendpoint());
        this.createStore('user', UserStore, this);
    }

    getApiendpoint() { return this.config.get('apiendpoint'); }

}
