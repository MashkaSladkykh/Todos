import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const Item = ({ id, titleValue, descriptionValue, onRemoveTodo, onCheckTodo, checked }) => (
    <ListItem>
        <Checkbox checked={checked}  onClick={() => onCheckTodo(id)} />
            <ListItemText
                primary={titleValue}
                secondary={descriptionValue}
            />
            <ListItemIcon>
                <IconButton aria-label="delete" onClick={() => onRemoveTodo(id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemIcon>
    </ListItem>
)