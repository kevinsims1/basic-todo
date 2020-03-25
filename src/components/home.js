import React, { useState, useEffect } from "react";
import TodoList from './todoList.js'
import AddTodo from './addTodo.js'
import { Paper, IconButton } from '@material-ui/core'
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

//css
import "../styles/css/paper.css"

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [addToDo, setAddTodo] = useState()
  useEffect(() => {
    setTodos(["do this", "do that", "do this", "do that", "do this", "do that", "do this", "do that", "do this", "do that", "do this", "do that"])
  }, [])

  const iconClick = (e) => {
    console.log(e)
    e.preventDefault()
    setAddTodo(e.currentTarget.value)
  }

  if (todos.length > 0) {
    return (
      <Paper elevation={3} className="paper">
        <header>
          <h1 style={{ textAlign: 'center', color: 'white', fontSize: "50px", padding: "0", margin: "0", fontFamily: "Roboto" }}>To-Do List</h1>
          <IconButton onClick={iconClick} value="true" >
            <FiPlusCircle />
          </IconButton>
          <IconButton onClick={iconClick} value="false">
            <FiMinusCircle />
          </IconButton>
        </header>
        <div>
          
          <TodoList addToDo={addToDo} todos={todos} />
        </div>
      </Paper>
    )
  } else {
    return <div>Loading</div>
  }
};

export default Home;