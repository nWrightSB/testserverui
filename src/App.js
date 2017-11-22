import React, { Component } from 'react';
import Login from './Login'
import Executions from './Executions'
import './App.css';
import './ProjectExecution.css'
import './TestSuiteExecution.css'
import request from 'request'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null,
      current_pw: null,
      test_server: 'http://10.0.29.207:8088',
      data_executions: null,
      data_project: null,
      data_testsuite: null
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleProjectDetails = this.handleProjectDetails.bind(this)
    this.handleTestSuiteDetails = this.handleTestSuiteDetails.bind(this)
  }

  handleProjectDetails(executionID) {
    let projectData = JSON.parse(this.state.data_executions)

    for (let i = 0; i < projectData["projectResultReports"].length; i++){
      let current_run = projectData["projectResultReports"][i]
      if (current_run["executionID"].toString() === executionID.toString()) {
        this.setState({
          data_project: current_run,
          data_testsuite: null
        })
        return
      }
    }
  }

  handleTestSuiteDetails(executionID, testsuite_name) {
    let projectData = JSON.parse(this.state.data_executions)

    for (let i = 0; i < projectData["projectResultReports"].length; i++){
      let current_project_run = projectData["projectResultReports"][i]
      if (current_project_run["executionID"].toString() === executionID.toString()) {
        for (let n = 0; n < current_project_run["testSuiteResultReports"].length; n++) {
            let current_testsuite_run = current_project_run["testSuiteResultReports"][n]
            if (current_testsuite_run["testSuiteName"] === testsuite_name) {
              this.setState({
                data_testsuite: current_testsuite_run
              })
            }
        }
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
          <h1 className="App-title">ts_UI</h1>
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
          data_project={this.state.data_project}
          data_testsuite={this.state.data_testsuite}
          handleProjectDetails={this.handleProjectDetails}
          handleTestSuiteDetails={this.handleTestSuiteDetails}
        />
      </div>
    );
  }
}

export default App;
