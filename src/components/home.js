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
    setTodos([{id: 1, message: "do this"}, {id: 2, message: "do this"}, {id: 3, message: "do this"}, {id: 4, message: "do this"}, ])
  }, [])

  const iconClick = (e) => {
    console.log(e)
    e.preventDefault()
    setAddTodo(e.currentTarget.value)
  }

  const todoDelete = (e) => {
    var td = []
    for(var i =0; i < todos.length; i++){
      if(e.currentTarget.value != todos[i].id){
        td.push(todos[i])
      }
    }
    setTodos(td)
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
          
          <TodoList addToDo={addToDo} todos={todos} setTodos={setTodos} todoDelete={todoDelete}/>
        </div>
      </Paper>
    )
  } else {
    return <div>Loading</div>
  }
};

export default Home;