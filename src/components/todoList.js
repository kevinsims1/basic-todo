import React, { useState } from "react";
import Todo from './todo.js'
import '../styles/css/todoList.css'
import AddTodo from "./addTodo.js";
import {Paper} from "@material-ui/core"

import '../styles/css/paper.css'

const TodoList = (props) => {
  const [newTodos, setNewTodos] = useState([])

  const handleChange = (e) => {
    let typeTodo = {
        id: props.todos.length + 1,
        message: e.target.value
      }

    let newTD = [...props.todos, typeTodo]
    setNewTodos(newTD)

  }

  const onClick = (e) => {
    console.log(e)
    e.preventDefault()
    props.setTodos(newTodos)
  }

  if (props.addToDo === "true") {
    return (
      <Paper className="todopaper">
        <AddTodo handleChange={handleChange} onClick={onClick} />
        <div className="todoList">
          {props.todos.slice(0).reverse().map((todo) => <Todo todo={todo} todoDelete={props.todoDelete}/>)}
        </div>
      </Paper>
      

    )
  } else {
    return (
      <Paper className="todopaper">
        <div className="todoList">
        {props.todos.slice(0).reverse().map((todo) => <Todo todo={todo} todoDelete={props.todoDelete}/>)}
      </div>
      </Paper>
      
    )
  }

};

export default TodoList;