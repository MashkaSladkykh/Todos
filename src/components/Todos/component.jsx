import { ConnectedEnterTodo } from './EnterTodo/component';
import { ConnectedTodosList } from './List/component';

export const Todos = () => (
  <div>
    <h1>Todos</h1>
    <ConnectedEnterTodo  />
    <ConnectedTodosList  /> 
  </div>
);