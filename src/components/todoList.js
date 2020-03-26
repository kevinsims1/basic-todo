import React, { useState, useEffect } from "react";
import Todo from './todo.js'
import '../styles/css/todoList.css'
import AddTodo from "./addTodo.js";
import {Paper} from "@material-ui/core"

import '../styles/css/paper.css'

const TodoList = (props) => {
  if (props.addTodo){

    if (props.addTodo === "true") {

      return (
        <Paper className="todopaper">
          <AddTodo handleChange={props.handleChange} onClick={props.onClick} />
          <div className="todoList">
            {props.todos.slice(0).reverse().map((todo) => <Todo key={todo.id} todo={todo} todoDelete={props.todoDelete} handleToggle={props.handleToggle} />)}
          </div>
        </Paper>
      )

    } else {
    
      return (
        <Paper className="todopaper">
          <div className="todoList">
          {props.todos.slice(0).reverse().map((todo) => <Todo key={todo.id} todo={todo} todoDelete={props.todoDelete} handleToggle={props.handleToggle} />)}
        </div>
        </Paper>
        
      )
    }
  }else {
    return <div>Loading</div>
  }
};

export default TodoList;