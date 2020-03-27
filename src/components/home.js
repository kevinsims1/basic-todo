import React, { useState, useEffect } from "react";
import TodoList from './todoList.js'
import { Paper, IconButton } from '@material-ui/core'
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Clock from "react-live-clock"
import Datetime from "react-datetime"
import {CustomIconButton} from '../styles/Customs.js'
//css
import "../styles/css/paper.css"
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [addToDo, setAddTodo] = useState("false")
  const [newTodos, setNewTodos] = useState([])

  useEffect(() => {
    setTodos([{ id: 1, message: "do this", checked: false }, { id: 2, message: "do this", checked: false }, { id: 3, message: "do this", checked: false }, { id: 4, message: "do this", checked: false },])
  }, [])

  const onClick = () => {
    setTodos(newTodos)
  }

  const iconClick = (e) => {
    console.log(e.currentTarget.value)
    e.preventDefault()
    setAddTodo(e.currentTarget.value)
    console.log(addToDo)
  }

  const todoDelete = (e) => {
    var td = []
    for (var i = 0; i < todos.length; i++) {
      if (e.currentTarget.value != todos[i].id) {
        td.push(todos[i])
      }
    }
    setTodos(td)
  }


  const handleChange = (e) => {
    let typeTodo = {
      id: todos.length + 1,
      message: e.target.value,
      checked: false
    }

    let newTD = [...todos, typeTodo]
    setNewTodos(newTD)

  }

  const handleToggle = (id) => {
    const item = todos.find((todo) => todo.id === id)
    const newItem = { ...item, checked: !item.checked }
    const index = todos.findIndex(item => item.id === id)
    const newItems = [...todos]
    newItems[index] = newItem
    setTodos(newItems)
  }

  const date = () => {
    return new Date().toDateString();
  }

  return (
    <Paper elevation={20} className="paper">
      <header>
        <h1 style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.74)', fontSize: "50px", padding: "0", margin: "0", fontFamily: "Roboto" }}>todos</h1>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%"}}>
          <div style={{paddingRight: "4%"}}>
            <CustomIconButton onClick={iconClick} value="true" color="primary" size="medium">
              <FiPlusCircle />
            </CustomIconButton>
            <CustomIconButton onClick={iconClick} value="false" color="primary" size="medium">
              <FiMinusCircle />
            </CustomIconButton>
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}> 
            <h4 style={{paddingRight: "15px", color: "rgba(0, 0, 0, 0.54)"}}>{date()}</h4>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} style={{color: "rgba(0, 0, 0, 0.54)"}}/>
          </div>
          
        </div>

      </header>
      <div>
        <TodoList handleToggle={handleToggle} handleChange={handleChange} addTodo={addToDo} onClick={onClick} todos={todos} setTodos={setTodos} todoDelete={todoDelete} />
      </div>
    </Paper>
  )
};

export default Home;