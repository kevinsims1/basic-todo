import React from "react";
import Todo from './todo.js'
import AddTodo from "./addTodo.js";
import {Paper} from "@material-ui/core"

//css
import '../styles/css/todoList.css'
import '../styles/css/paper.css'

const TodoList = (props) => {
  if (props.addTodo && props.todoDelete){

    if (props.addTodo === "true") {
      return (
        <Paper elevation={0} className="todopaper">
          <AddTodo handleChange={props.handleChange} onClick={props.onClick} />
          <div className="todoList">
            {props.todos.slice(0).reverse().map((todo) => <Todo key={todo.id} todo={todo} todoDelete={props.todoDelete} handleToggle={props.handleToggle} />)}
          </div>
        </Paper>
      )
    } else {
      return (
        <Paper elevation={0} className="todopaper">
          <div className="todoList">
            {props.todos.length > 0 ? props.todos.slice(0).reverse().map((todo) => <Todo key={todo.id} todo={todo} todoDelete={props.todoDelete} handleToggle={props.handleToggle} />) : <div>Click Plus Button To Add Todo</div>}
          </div>
        </Paper>
      )
    }

  }else {
    return <div>Loading</div>
  }
};

export default TodoList;
