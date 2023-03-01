import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {connect} from 'react-redux';
import { useState } from 'react';

import { setActiveTodo, removeTodo, checkTodo } from '../../../../store/todos/actions';
import { selectActiveTodo } from '../../../../store/todos/selectors';
import { ModalTodo } from '../Modal/component';

const TodoItem = ({rows, row, setActiveTodo, activeTodo, removeTodo, checkTodo }) => {
  const [open, setOpen] = useState(false);

  const handleClose = e => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <>
      <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        onClick={() => {setOpen(true); setActiveTodo(row);}}
      >
        <TableCell align="right" onClick={e => {e.stopPropagation(); checkTodo(row.id);}}>{row.check}</TableCell>
        <TableCell align="right" >{rows.indexOf(row) + 1}</TableCell>
        <TableCell align="right" >{row.title}</TableCell>
        <TableCell align="right" >{row.description}</TableCell>  
        <TableCell align="right" onClick={() => removeTodo(row.id)}>{row.remove}</TableCell> 
      </TableRow>
      <ModalTodo open={open} onClose={e => handleClose(e)} todo={activeTodo}/>
    </>
  );};



const mapStateToProps = state => ({
  activeTodo: selectActiveTodo(state),
});

const mapDispatchToProps = {
  setActiveTodo,
  checkTodo,
  removeTodo,
};

export const ConnectedTodoItem = connect(mapStateToProps, mapDispatchToProps)(TodoItem);