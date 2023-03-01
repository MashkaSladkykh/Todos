import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {connect} from 'react-redux';

import {selectTodos, selectEnterTitleTodo, selectEnterDescriptionTodo} from '../../../store/todos/selectors';
import {addTodo, setEnterTitleTodo, setEnterDescriptionTodo, checkTodo, removeTodo} from '../../../store/todos/actions';

import './style.scss';

const EnterTodo = ({ enterTitleTodo, 
  enterDescriptionTodo, 
  setEnterTitleTodo, 
  setEnterDescriptionTodo,
  addTodo  }) => {

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
  
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        required id="outlined-basic" 
        label="Title" variant="outlined" 
        value={enterTitleTodo} 
        onChange={handleEnterTitleTodo}/>
      <TextField 
        required 
        id="outlined-basic" 
        label="Decription" 
        variant="outlined" 
        value={enterDescriptionTodo} 
        onChange={handleEnterDescriptionTodo}/>
      <Button variant="contained" className="button" onClick={handleAddTodo}>Create</Button>
    </Box>
  );};

 
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

export const ConnectedEnterTodo = connect(mapStateToProps, mapDispatchToProps)(EnterTodo);