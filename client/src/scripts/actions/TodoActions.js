'use strict';

import { Actions } from 'flummox';
import axios from 'axios';

let serverFetchTodos = async function (apiendpoint) {
  let todos = await axios.get(apiendpoint + '/todos');
  return todos.data.slice(0, 7);  // passed to the store after REST response (obviously); sliced for the demo
};

let serverCreateTodo = async function (apiendpoint, todoContent) {
  var todo = await axios.post(apiendpoint + '/todos', {body: todoContent});
  return todo.data;
};

let serverDeleteTodo = function (apiendpoint, todo) {
  axios.delete(apiendpoint + '/todos/' + todo.get('id'));
  return todo; // passed to the store without awaiting REST response for optimistic delete
};

export class TodoActions extends Actions {

  constructor(apiendpoint) {
    super();
    this.apiendpoint = apiendpoint;
  }

  async fetchTodos() {
    return await serverFetchTodos(this.apiendpoint);
  }

  createTodo(todoContent) {
    return serverCreateTodo(this.apiendpoint, todoContent);
  }

  deleteTodo(todo) {
    return serverDeleteTodo(this.apiendpoint, todo);
  }
}
