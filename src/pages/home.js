import React, { useState, useEffect } from "react";
import TodoList from '../components/todoList.js'
import { Paper } from '@material-ui/core'

import { Redirect } from "@reach/router"
import Header from "../components/header.js"

//css
import "../styles/css/paper.css"

const Home = () => {
  const [currUser, setCurUser] = useState({})
  const [todos, setTodos] = useState([]);
  const [addToDo, setAddTodo] = useState("false")
  const [newTodos, setNewTodos] = useState([])

  useEffect(() => {
    fetch("https://todo-db-kevin.herokuapp.com/user",{
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

  }, [])

  const onClick = () => {
    let realTodo = {
      message: newTodos[newTodos.length - 1].message,
      user_id: currUser._id
    }

    fetch("https://todo-db-kevin.herokuapp.com/todo/create", {
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
    fetch('https://todo-db-kevin.herokuapp.com/todo/delete', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(e.currentTarget.value)
    })
    var td = []
    for (var i = 0; i < todos.length; i++) {
      if (e.currentTarget.value != todos[i]._id) {
        td.push(todos[i])
      }
    }
    console.log(td)
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

  if(!window.localStorage.getItem("birdie")){
    return <Redirect from="/" to="login" noThrow/>
  }
  return (
    <div className="paperWrapper">
       <h1 style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.74)', fontSize: "50px", padding: "0", margin: "0", fontFamily: "Roboto" }}>todos</h1>
        <Paper elevation={20} className="paper">
          <Header date={date} iconClick={iconClick} />
          <div>
            <TodoList handleToggle={handleToggle} handleChange={handleChange} addTodo={addToDo} onClick={onClick} todos={todos} setTodos={setTodos} todoDelete={todoDelete} />
          </div>
        </Paper>
    </div>
    
  )
};

export default Home;
