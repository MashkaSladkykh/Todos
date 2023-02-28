import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export const ModalTodo = ({open, onClose, todo}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="modal"
      open={open}
      onClose={onClose}
      closeAfterTransition >
      <Box sx={style}>
        <IconButton aria-label="delete" onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {todo.title}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {`status: ${todo.checked}`}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {todo.description}
        </Typography>
      </Box>
    </Modal>
  );
};