import { EnterTodo } from './EnterTodo/component';
import { TodosList } from './List/component';

export const TodosComponent = ({ 
  enterTitleTodo, 
  enterDescriptionTodo, 
  todos, 
  isTodosEmpty, 
  onEnterTitleTodo, 
  onEnterDescriptionTodo, 
  onAddTodo,
}) => (
  <div>
    <h1>Todos</h1>
    <EnterTodo
      titleValue={enterTitleTodo}
      descriptionValue={enterDescriptionTodo}
      onTitleChange={onEnterTitleTodo}
      onDescriptionChange={onEnterDescriptionTodo}
      onClick={onAddTodo}
    />
    {isTodosEmpty
      ? <div>THERE IS NOTHING HERE</div>
      : (
        <TodosList
          todos={todos}
        />
      )
    }
  </div>
);