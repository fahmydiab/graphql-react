import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from "./Navigation";
import LoginPage from "./Login";
import RegisterPage from "./Register";
import ProfilePage from "./Profile";

class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <Navigation/>
            <hr/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/profile" component={ProfilePage}/>
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
