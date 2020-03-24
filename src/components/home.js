import React, { useState, useEffect } from "react";
import TodoList from './todoList.js'
import AddTodo from './addTodo.js'
import { Paper } from '@material-ui/core'

//css
import "../styles/css/paper.css"

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState([])
  useEffect(() => {
    setTodos(["do this", "do that", "do this", "do that", "do this", "do that", "do this", "do that", "do this", "do that", "do this", "do that"])
  }, [])

  const handleChange = (e) => {
    let newTD = [...todos, e.target.value]
    setNewTodos(newTD)
  }

  const onClick = (e) => {
    console.log(e)
    e.preventDefault()
    setTodos(newTodos)
  }

  if (todos.length > 0) {
    return (
      <Paper elevation={3} className="paper">
        <AddTodo handleChange={handleChange} onClick={onClick}/>
        <TodoList todos={todos} />
      </Paper>
    )
  } else {
    return <div>Loading</div>
  }
};

export default Home;