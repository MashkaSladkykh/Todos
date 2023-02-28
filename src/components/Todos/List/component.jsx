import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { ModalTodo } from './Modal/component';


export const TodosList = ({todos, onRemoveTodo, onCheckTodo}) => {
  const [activeTodo, setActiveTodo] = useState({});
  const createData = (checked, id, title, description) => ({ 
    checked:<Checkbox checked={checked}  onClick={e => onCheckTodo(e, id)} /> ,
    id, 
    title, 
    description, 
    remove:  <ListItemIcon>
      <IconButton aria-label="delete" onClick={e => onRemoveTodo(e, id)}>
        <DeleteIcon />
      </IconButton>
    </ListItemIcon>,                
  });

  const rows = todos.map(({id, titleValue, descriptionValue, checked}) => createData(checked, id, titleValue, descriptionValue));

  const [open, setOpen] = useState(false);


  const handleRowClick = row => {
    setActiveTodo(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => handleRowClick(row)}
              >
                <TableCell align="right">{row.checked}</TableCell>
                <TableCell align="right" >{rows.indexOf(row) + 1}</TableCell>
                <TableCell align="right" >{row.title}</TableCell>
                <TableCell align="right" >{row.description}</TableCell>  
                <TableCell align="right">{row.remove}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalTodo open={open} onClose={handleClose} todo={activeTodo} />
    </>
  );
};