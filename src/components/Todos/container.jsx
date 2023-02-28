import React, { useState } from 'react';

import {TodosComponent} from './component';

export const Todos = () => {
  const [state, setState] = useState ({
    enterTitleTodo: '',
    enterDescriptionTodo: '',
    todos: [],
  });
    
  const handleEnterTitleTodo = e => {
    setState({
      ...state,
      enterTitleTodo: e.target.value,
    });
  };
  const handleEnterDescriptionTodo = e => {
    setState({
      ...state,
      enterDescriptionTodo: e.target.value,
    });
  };
    
  const handleAddTodo = () => {
    const { enterTitleTodo, enterDescriptionTodo, todos } = state;
    const newTodo = {
      id: new Date().getMilliseconds(),
      titleValue: enterTitleTodo,
      descriptionValue: enterDescriptionTodo,
      checked: false,
    };
    if(enterTitleTodo && enterDescriptionTodo !== ''){    
      setState({
        enterTitleTodo: '',
        enterDescriptionTodo: '',
        todos: [...todos, newTodo],
      });}
  };
    
  const handleRemoveTodo = (e, todoId) => {
    e.stopPropagation();
    const { todos } = state;
    const updatedTodos = todos.filter(todo => todoId !== todo.id);
    
    setState({
      ...state,
      todos: updatedTodos,
    });
  };
    
  const handleCheckTodo = (e, todoId) => {
    e.stopPropagation();
    const { todos } = state;
    const changedTodos = todos.map(todo => {
      if (todoId === todo.id){
        return {
          ...todo,
          checked: !todo.checked,
        };
      }
      return todo;
    });
    
    setState({
      ...state,
      todos: changedTodos,
    });
        
  };
    
  const isTodosEmpty = state.todos.length === 0;
      
  return (
    <TodosComponent
      enterTitleTodo={state.enterTitleTodo}
      enterDescriptionTodo={state.enterDescriptionTodo}
      todos={state.todos}
      isTodosEmpty={isTodosEmpty}
      onEnterTitleTodo={handleEnterTitleTodo}
      onEnterDescriptionTodo={handleEnterDescriptionTodo}
      onAddTodo={handleAddTodo}
      onRemoveTodo={handleRemoveTodo}
      onCheckTodo={handleCheckTodo}
    />
  );
};