import React from "react";
import ReactDOM from "react-dom";
import Home from './components/home.js'
import theme from '../src/styles/theme.js'
import {ThemeProvider} from '@material-ui/core'

import './styles/css/bare.css'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));