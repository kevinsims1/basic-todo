import React from "react";
import {TextField, Button } from '@material-ui/core'

//css
import "../styles/css/paper.css"

//TODO: find out how to use withStyles from material ui

const AddTodo = (props) => {
    return (
        <div className="addtodo">
          <Button variant="contained"  className="button"  color="primary" size="large" onClick={()=>props.onClick()}>
            Add Todo
          </Button>
          
          <TextField id="standard-basic"  label="New Todo" onChange={(e) => props.handleChange(e)}/>
        </div>
    )
};

export default AddTodo;