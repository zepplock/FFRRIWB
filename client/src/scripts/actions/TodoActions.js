'use strict';

import { Actions } from 'flummox';
import axios from 'axios';

let serverFetchTodos = async function () {
  let todos = await axios.get('todos');
  return todos.data.slice(0, 7);  // passed to the store after REST response (obviously); sliced for the demo
};

let serverCreateTodo = async function (todoContent) {
  var todo = await axios.post('todos', {body: todoContent});
  return todo.data;
};

let serverDeleteTodo = function (todo) {
  axios.delete('todos/' + todo.get('id'));
  return todo; // passed to the store without awaiting REST response for optimistic delete
};

export class TodoActions extends Actions {

  constructor() {
    super();
  }

  async fetchTodos() {
    return await serverFetchTodos();
  }

  createTodo(todoContent) {
    return serverCreateTodo(todoContent);
  }

  deleteTodo(todo) {
    return serverDeleteTodo(todo);
  }
}
