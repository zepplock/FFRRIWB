'use strict';

import { Store } from 'flummox';
import Immutable from 'immutable';

export class TodoStore extends Store {

    constructor(flux) {
        super();

        this.state = { todos: Immutable.Map() };

        class TodoRecord extends Immutable.Record({id: null, body: null}) {
            label() { return this.get('body'); }
        }

        /*
        Registering action handlers
        */

        const actionIds = flux.getActionIds('todos');

        this.register(actionIds.createTodo, (data) => {
            const newMap = this.state.todos.set(data.id, new TodoRecord(data));
            this.setState({ todos: newMap });
        });

        this.register(actionIds.fetchTodos, (todos) => {

            let todosMap = Immutable.Map();
            for(let todo of todos) {
                todosMap = todosMap.set(todo.id, new TodoRecord(todo));
            }

            this.setState({ todos: this.state.todos.merge(todosMap) });
        });

        this.register(actionIds.deleteTodo, (todo) => {
            let todos = this.state.todos.delete(todo.get('id'));
            if(todos !== this.state.todos) { this.setState({ todos: todos }); }
        });
    }

    getTodos() { return this.state.todos; }
}
