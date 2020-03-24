import React from "react";
import {TextField, Button } from '@material-ui/core'

//css
import "../css/paper.css"

const AddTodo = (props) => {
    return (
        <div className="addtodo">
          <Button variant="contained"  className="button"  color="primary" size="large" onClick={props.onClick}>
            Add Todo
          </Button>
          
          <TextField id="standard-basic" label="New Todo" onChange={props.handleChange}/>
        </div>
    )
};

export default AddTodo;