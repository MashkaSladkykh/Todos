import {
  ADD_TODO,
  SET_ENTER_TITLE_TODO, 
  SET_ENTER_DESCRIPTION_TODO, 
  SET_ACTIVE_TODO,
  REMOVE_TODO,
  CHECK_TODO,
} from './types';

const initialState = {
  enterTitleTodo: '',
  enterDescriptionTodo: '',
  activeTodo: {},
  items: [],
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
  case SET_ENTER_TITLE_TODO:
    return {
      ...state,
      enterTitleTodo: action.payload,
    };
  case SET_ENTER_DESCRIPTION_TODO:
    return {
      ...state,
      enterDescriptionTodo: action.payload,
    };
  case ADD_TODO:
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  case CHECK_TODO:
    return {
      ...state,
      items: state.items.map(todo => action.payload === todo.id ? {...todo, checked: !todo.checked}: todo),
    };

  case SET_ACTIVE_TODO:
    return {
      ...state,
      activeTodo: state.items.filter(todo => action.payload === todo.id),
    };
  case REMOVE_TODO:
    return {
      ...state,
      items: state.items.filter(todo => action.payload !== todo.id),
    };
  default:
    return state;
  }
};
