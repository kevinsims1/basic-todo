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
  const [newTodo, setNewTodo] = useState("")

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
        setCurUser(data.user)
        setTodos(data.todos)
    })
    .catch(err => {console.log(err)})

  }, [])


  const handleChange = (e) => {
    setNewTodo(e.target.value)
  }


  const onClick = () => {
    let realTodo = {
      message: newTodo,
      user_id: currUser._id
    }

    fetch("https://todo-db-kevin.herokuapp.com/todo/create", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(realTodo)
    })
    .then(response => {
      return response.json()
    })
    .then(object => {
        setTodos([...todos, object.data])
        setNewTodo("")
    })
    .catch(err => {console.log("ERROROROR",err)})
  }

  


  const iconClick = (e) => {
    e.preventDefault()
    setAddTodo(e.currentTarget.value)
  }

  

  const todoDelete = (e) => {
    fetch("https://todo-db-kevin.herokuapp.com/todo/delete", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ _id: e.currentTarget.value })
    })
    .then(response => {
      return response.json()
    })
    .then(object => {
        const td = []
        for (var i = 0; i < todos.length; i++) {
          if (object.data._id !== todos[i]._id) {
            td.push(todos[i])
          }
        }
        setTodos(td)
    })
    .catch(err => {console.log("ERROROROR",err)})

    
  }

  const handleChecked = (todo) => {
    fetch("https://todo-db-kevin.herokuapp.com/todo/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify({ id: todo._id, checked: !todo.checked })
    })
    .then(response => {
      return response.json()
    })
    .then(object => {
        const index = todos.findIndex(todo => todo._id === object.data._id)
        const newItems = [...todos]
        newItems[index] = object.data
        setTodos(newItems)
    })
    .catch(err => {console.log("ERROROROR",err)})
    
    
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
            <TodoList handleChecked={handleChecked} newTodo={newTodo}  handleChange={handleChange} addTodo={addToDo} onClick={onClick} todos={todos} setTodos={setTodos} todoDelete={todoDelete} />
          </div>
        </Paper>
    </div>
    
  )
};

export default Home;
