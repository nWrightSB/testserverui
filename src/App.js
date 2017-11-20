import React, { Component } from 'react';
import Login from './Login'
import Executions from './Executions'
import './App.css';
import './ProjectExecution.css'
import request from 'request'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null,
      current_pw: null,
      test_server: 'http://10.0.29.207:8088',
      data_executions: null,
      data_testsuite: null,
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleProjectDetails = this.handleProjectDetails.bind(this)
  }

  handleProjectDetails(executionID) {
    let projectData = JSON.parse(this.state.data_executions)

    for (let i = 0; i < projectData["projectResultReports"].length; i++){
      let current_run = projectData["projectResultReports"][i]
      if (current_run["executionID"].toString() === executionID.toString()) {
        this.setState({
          data_testsuite: current_run
        })
        return
      }
    }
  }

  handleLogin(username, password) {
    let reqObj = {
      url: this.state.test_server + '/v1/readyapi/executions',
      auth: {
          'user': username,
          'pass': password
      }
    };

    request(reqObj, function(error, response, body) {
      if (!error && response.statusCode === 200) {
          this.setState({
            current_user: reqObj.auth.user,
            current_pw: reqObj.auth.pass,
            data_executions: body
          })
      }
    }.bind(this));
  }

  handleLogout() {
    this.setState({
      current_user: null,
      current_pw: null,
      data_executions: null
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">test_serverUI</h1>
          <Login
            current_user={this.state.current_user}
            current_pw={this.state.current_pw}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
          />
        </header>
        <br />
        <Executions
          data_executions={this.state.data_executions}
          data_testsuite={this.state.data_testsuite}
          handleProjectDetails={this.handleProjectDetails}
        />
      </div>
    );
  }
}

export default App;
