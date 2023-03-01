import {connect} from 'react-redux';

import {selectTodos, selectEnterTitleTodo, selectEnterDescriptionTodo} from '../../store/todos/selectors';
import {addTodo, setEnterTitleTodo, setEnterDescriptionTodo, checkTodo, removeTodo} from '../../store/todos/actions';

import {TodosComponent} from './component';

const Todos = ({
  todos, 
  addTodo, 
  enterTitleTodo, 
  enterDescriptionTodo, 
  setEnterTitleTodo, 
  setEnterDescriptionTodo, 
  checkTodo, 
  removeTodo,
  }) => {
  
  const handleEnterTitleTodo = e => {
    setEnterTitleTodo(e.target.value);
  };

  const handleEnterDescriptionTodo = e => {
    setEnterDescriptionTodo(e.target.value);
  };
    
  const handleAddTodo = () => {
    const newTodo = {
      id: new Date().getMilliseconds(),
      titleValue: enterTitleTodo,
      descriptionValue: enterDescriptionTodo,
      checked: false,
    };
    setEnterTitleTodo('');
    setEnterDescriptionTodo('');
    addTodo(newTodo);
  };
    
  const handleRemoveTodo = (e, todoId) => {
    e.stopPropagation();
    removeTodo(todoId);
  };
    
  const handleCheckTodo = (e, todoId) => {
    e.stopPropagation();
    checkTodo(todoId);
  };
    
  const isTodosEmpty = todos.length === 0;
      
  return (
    <TodosComponent
      enterTitleTodo={enterTitleTodo}
      enterDescriptionTodo={enterDescriptionTodo}
      todos={todos}
      isTodosEmpty={isTodosEmpty}
      onEnterTitleTodo={handleEnterTitleTodo}
      onEnterDescriptionTodo={handleEnterDescriptionTodo}
      onAddTodo={handleAddTodo}
      onRemoveTodo={handleRemoveTodo}
      onCheckTodo={handleCheckTodo}
    />
  );
};

const mapStateToProps = state => ({
  todos: selectTodos(state),
  enterTitleTodo: selectEnterTitleTodo(state),
  enterDescriptionTodo: selectEnterDescriptionTodo(state),
});

const mapDispatchToProps = {
  addTodo,
  setEnterTitleTodo,
  setEnterDescriptionTodo,
  checkTodo, 
  removeTodo,
};

export const TodosRedux = connect(mapStateToProps, mapDispatchToProps)(Todos);