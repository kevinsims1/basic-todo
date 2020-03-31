import React, { useState, useEffect } from "react";
import TodoList from './todoList.js'
import { Paper } from '@material-ui/core'
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import Clock from "react-live-clock"
import {CustomIconButton} from '../styles/Customs.js'

import { Link } from "@reach/router"


//css
import "../styles/css/paper.css"

const Home = () => {
  const [currUser, setCurUser] = useState({})
  const [todos, setTodos] = useState([]);
  const [addToDo, setAddTodo] = useState("false")
  const [newTodos, setNewTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/user",{
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'authorization': window.localStorage.getItem("birdie")
      }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setCurUser(data.user)
        setTodos(data.todos)
    })
    .catch(err => {console.log(err)})

    // setTodos([{ id: 1, message: "do this", checked: false }, { id: 2, message: "do this", checked: false }, { id: 3, message: "do this", checked: false }, { id: 4, message: "do this", checked: false },])
  }, [])

  const onClick = () => {
    console.log(newTodos[newTodos.length - 1].message, "message")
    console.log(currUser._id)
    let realTodo = {
      message: newTodos[newTodos.length - 1].message,
      user_id: currUser._id
    }
    console.log(currUser._id)


    fetch("http://localhost:3000/todo/create", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(realTodo)
    })
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
        console.log(data)
        setTodos(newTodos)
    })
    .catch(err => {console.log("ERROROROR",err)})
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
    let phonyTodo = {
      id: todos.length + 1,
      message: e.target.value,
      checked: false
    }

    let newTD = [...todos, phonyTodo]
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
    <div className="paperWrapper">
       <h1 style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.74)', fontSize: "50px", padding: "0", margin: "0", fontFamily: "Roboto" }}>todos</h1>
        <Paper elevation={20} className="paper">
          <header>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%"}}>
              <div style={{paddingRight: "4%"}}>
                <CustomIconButton onClick={iconClick} value="true" color="primary" size="medium">
                  <FiPlusCircle />
                </CustomIconButton>
                <CustomIconButton onClick={iconClick} value="false" color="primary" size="medium">
                  <FiMinusCircle />
                </CustomIconButton>
                <Link to="login">login</Link> 
                <Link to="signup">signup</Link> 
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
    </div>
    
  )
};

export default Home;