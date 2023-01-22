import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from "./Navigation";
import LoginPage from "./Login";
import RegisterPage from "./Register";

class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <Navigation/>
            <hr/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
