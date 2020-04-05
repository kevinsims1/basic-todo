import React from "react";
import { Paper, IconButton } from '@material-ui/core';
import List from '@material-ui/core/list';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { MdDelete } from "react-icons/md"

import {CustomCheckbox, CustomLit} from '../styles/Customs.js'

//css
import '../styles/css/todo.css'



const Todo = (props) => {
   

    return (
        <Paper style={{ backgroundColor: '#fff', marginRight: '10px', }} elevation={0}>
            <List style={{ display: "flex", flexDirection: "row", textAlign: "center", justifyContent: "flex-start", margin: "10px", width: "90%", maxWidth: "400px" }}>
                <ListItem>
                    <ListItemIcon>
                        <CustomCheckbox
                            color="primary"
                            checked={props.todo.checked}
                            onChange={() => props.handleChecked(props.todo)}
                        />
                    </ListItemIcon>

                    <ListItemIcon>
                        <IconButton value={props.todo._id} onClick={props.todoDelete} style={{color: 'rgba(0, 0, 0, 0.54)'}}>
                            <MdDelete size={30} />
                        </IconButton>
                    </ListItemIcon>

                    <CustomLit
                        primary={props.todo.message}
                        className={props.todo.checked ? "todo" : "to"}
                    />
                </ListItem>
            </List>
        </Paper>
    )
};

export default Todo;
