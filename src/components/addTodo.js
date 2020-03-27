import React from "react";
import {TextField, Button, withStyles } from '@material-ui/core'
import {CustomButton} from '../styles/Customs.js'
//css
import "../styles/css/paper.css"

//TODO: find out how to use withStyles from material ui

const AddTodo = (props) => {


    return (
        <div className="addtodo">
          <CustomButton variant="contained"  className="button"  size="large" onClick={()=>props.onClick()} >
            Add Todo
          </CustomButton>
          
          <TextField id="standard-basic"  color="primary" label="New Todo" onChange={(e) => props.handleChange(e)}/>
        </div>
    )
};

export default AddTodo;