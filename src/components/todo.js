import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//css
import '../css/todo.css'

const Todo = (props) => {
    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }

    return (
        <List style={{ display: "flex", flexDirection: "row", textAlign: "center", justifyContent: "flex-start", margin: "10px",  width: "90%", maxWidth: "400px" }}>
            <ListItem>
                <ListItemIcon>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </ListItemIcon>
                <ListItemText
                    primary={props.todo}
                    className={checked ? "todo" : ""}
                />
            </ListItem>
        </List>
    )
};

export default Todo;