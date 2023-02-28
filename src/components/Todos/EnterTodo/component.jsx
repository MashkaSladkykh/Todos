import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './style.scss';

export const EnterTodo = ({ titleValue, descriptionValue, onTitleChange, onDescriptionChange, onClick }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="outlined-basic" label="Title" variant="outlined" value={titleValue} onChange={onTitleChange}/>
      <TextField required id="outlined-basic" label="Decription" variant="outlined" value={descriptionValue} onChange={onDescriptionChange}/>
      <Button variant="contained" className='button' onClick={onClick}>Create</Button>
    </Box>
  );
}