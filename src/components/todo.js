import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox"
import {Paper, IconButton} from '@material-ui/core';
import List from '@material-ui/core/list';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {MdDelete} from "react-icons/md"

//css
import '../styles/css/todo.css'

const Todo = (props) => {
    const [checked, setChecked] = useState(false)
    const handleChange = (e) => {
        setChecked(e.target.checked)
    }
    
    return (
        <Paper style={{backgroundColor: '#626dbb', marginRight: '10px'}} elevation={6}>
            <List style={{ display: "flex", flexDirection: "row", textAlign: "center", justifyContent: "flex-start", margin: "10px",  width: "90%", maxWidth: "400px" }}>
                <ListItem>
                    <ListItemIcon>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItemIcon>

                    <ListItemIcon>
                        <IconButton value={props.todo.id} onClick={props.todoDelete}>
                            <MdDelete size={30}/>
                        </IconButton>
                    </ListItemIcon>

                    <ListItemText
                        primary={props.todo.message}
                        className={checked ? "todo" : "to"}
                    />
                </ListItem>
            </List>
        </Paper>
    )
};

export default Todo;