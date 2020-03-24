import React from "react";
import Todo from './todo.js'


const TodoList = (props) => {
  return (
    props.todos.map((todo) => <Todo todo={todo}/>)
  )
};

export default TodoList;