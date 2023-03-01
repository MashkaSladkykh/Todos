import {connect} from 'react-redux';

import {selectTodos} from '../../store/todos/selectors';

import { ConnectedEnterTodo } from './EnterTodo/component';
import { TodosList } from './List/component';

const TodosComponent = ({ 
  todos, 
}) => (
  <div>
    <h1>Todos</h1>
    <ConnectedEnterTodo
    />
    <TodosList
      todos={todos}
    /> 
  </div>
);
   
 
const mapStateToProps = state => ({
  todos: selectTodos(state),
});

export const Todos = connect(mapStateToProps)(TodosComponent);