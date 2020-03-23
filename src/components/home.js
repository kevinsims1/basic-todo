import React, { useState, useEffect } from "react";
import Todo from './todo.js'
import { Paper, TextField, Button } from '@material-ui/core'
//css
import "../css/bare.css"
import "../css/paper.css"

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState()
  useEffect(() => {
    setTodos(["do this", "do that", "do this", "do that", "do this", "do that", "do this", "do that", "do this", "do that", "do this", "do that"])
  }, [])

  if (todos.length > 0) {
    return (
      <Paper elevation={3} className="paper">
        <div>
          <Button variant="contained" color="primary" size="small">
            Add Todo
          </Button>
          <TextField id="standard-basic" label="New Todo" onChange={(e)=> setNewTodo(e.target.value)}/>
        </div>
        <h3>{newTodo}</h3>
        <Todo todos={todos} />
      </Paper>
    )
  } else {
    return <div>Loading</div>
  }
};

export default Home;