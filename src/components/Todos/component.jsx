import { ConnectedEnterTodo } from './EnterTodo/component';
import { TodosListRedux } from './List/component';

export const Todos = () => (
  <div>
    <h1>Todos</h1>
    <ConnectedEnterTodo  />
    <TodosListRedux  /> 
  </div>
);