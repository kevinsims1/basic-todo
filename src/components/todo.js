import React, {useEffect} from "react";

const Todo = (props) => {
  return (
    props.todos.map((todo)=>{
        return <h3>{todo}</h3>
    }))
};

export default Todo;