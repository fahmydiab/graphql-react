import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Navigation from "./Navigation";
import LoginPage from "./Login";
import RegisterPage from "./Register";
import ProfilePage from "./Profile";
import activeSession from "./ActiveSession";

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Navigation session={this.props.session}/>
                    <hr/>
                    <Route path="/login" component={() => this.props.session && this.props.session.me ?
                        <Redirect to={/profile}/}/> : <LoginPage refetch={this.props.refetch}/>}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/profile" component={() => this.props.session && this.props.session.me === null ?
                        <Redirect to="/login"/> : <ProfilePage/>}/>
                </React.Fragment>
            </Router>
        );
    }
}

export default activeSession(App);
