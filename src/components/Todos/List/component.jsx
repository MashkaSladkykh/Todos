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

import { TodoItemRedux } from './Item/component';

export const TodosList = ({todos}) => {
  const createData = (checked, id, title, description) => ({ 
    check:<Checkbox checked={checked} /> ,
    checked,
    id, 
    title, 
    description, 
    remove:  <ListItemIcon>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </ListItemIcon>,                
  });

  const rows = todos.map(({
    id, 
    titleValue, 
    descriptionValue, 
    checked,
  }) => createData(checked, id, titleValue, descriptionValue));
 
  return (
    <>
      {todos.length === 0 ? 
        <h1>There is nothig to do</h1> :
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
                <TodoItemRedux
                  key={row.id}
                  rows={rows}
                  row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </>
  );
};