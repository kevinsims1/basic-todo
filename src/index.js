import React from "react";
import ReactDOM from "react-dom";
import theme from '../src/styles/theme.js'
import {ThemeProvider} from '@material-ui/core'
import { Router, Link } from "@reach/router"

import Home from './components/home.js'
import Login from './components/login.js'
import Signup from './components/signup.js'

import './styles/css/bare.css'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Home path="/" />
        <Login path="login" />
        <Signup path="signup" />
      </Router>
    </ThemeProvider>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));