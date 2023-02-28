import List from '@mui/material/List';

import { Item } from "./Item/component";

export const TodosList = ({todos, onRemoveTodo, onCheckTodo}) => (
    <List>
        {todos.map(({id, titleValue, descriptionValue, checked}) =>(
            <Item
            key={id}
            id={id}
            titleValue={titleValue}
            descriptionValue={descriptionValue}
            onRemoveTodo={onRemoveTodo}
            onCheckTodo={onCheckTodo}
            checked={checked}
          />

        ) )}
    </List>
)