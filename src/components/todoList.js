import React from "react";
import Todo from './todo.js'


const TodoList = (props) => {
  return (
    props.todos.slice(0).reverse().map((todo) => <Todo todo={todo}/>)
  )
};

export default TodoList;