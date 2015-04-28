'use strict';

import React from 'react';
import UIPageHeader from '../PageHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

let TodosPage = React.createClass({
  render() {

    const handleAdd = (title) => {
      this.props.flux.getActions('todos').createTodo(title);
    };

    return (
      <div>
        <UIPageHeader icon="star" text='Todos'/>

        <TodoList {...this.props} />
        <TodoForm {...this.props} onAdd={handleAdd}/>
      </div>
    );
  }
});

module.exports = TodosPage;
