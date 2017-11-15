import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null,
      current_pw: null,
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    // This should handle the 'login' aspect of the platform, user enters
    // their name and PW, it is verified against the server and stored
    // in state to be sent in subsequent requests.
    // >> Simpliest call to verify a user is registered w/server
    //  >> GET /v1/readyapi/executions
    //    >> 404 - Unauthorized user
    //    >> 200 - Returns recent executions which will be the base
    //             of the stats view.
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">test_server_UI</h1>
        </header>
        <Login
          current_user={this.state.current_user}
          current_pw={this.state.current_pw}
          handleLogin={this.handleLogin}
        />
      </div>
    );
  }
}

export default App;
