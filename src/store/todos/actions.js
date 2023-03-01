import {
  ADD_TODO,
  SET_ENTER_TITLE_TODO, 
  SET_ENTER_DESCRIPTION_TODO, 
  SET_ACTIVE_TODO,
  REMOVE_TODO,
  CHECK_TODO,
} from './types';

export const setEnterTitleTodo = payload => ({
  type: SET_ENTER_TITLE_TODO,
  payload,
});

export const setEnterDescriptionTodo = payload => ({
  type: SET_ENTER_DESCRIPTION_TODO,
  payload,
});

export const addTodo = payload => ({
  type: ADD_TODO,
  payload,
});

export const checkTodo = payload => ({
  type: CHECK_TODO,
  payload,
});

export const setActiveTodo = payload => ({
  type: SET_ACTIVE_TODO,
  payload,
});

export const removeTodo = payload => ({
  type: REMOVE_TODO,
  payload,
});
