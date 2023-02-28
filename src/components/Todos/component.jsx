import { EnterTodo } from "./EnterTodo/component"

export const TodosComponent = ({ enterTitleTodo, enterDescriptionTodo, todos, isTodosEmpty, onEnterTitleTodo, onEnterDescriptionTodo, onAddTodo, onRemoveTodo, onCheckTodo }) => (
  <div>
    <h1>Todos</h1>
    <EnterTodo
      titleValue={enterTitleTodo}
      descriptionValue={enterDescriptionTodo}
      onTitleChange={onEnterTitleTodo}
      onDescriptionChange={onEnterDescriptionTodo}
      onClick={onAddTodo}
    />


  </div>
)