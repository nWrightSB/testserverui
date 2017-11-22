import React from 'react';
import MiniTestSuite from './MiniTestSuite'

const Project = props => {
  let parsed_project_data = null
  // PROJECT LEVEL DATA
  let project_name = null
  let project_status = null
  let executionID = null
  let timeTaken = null
  let startTime = null
  // TESTSUITE DATA
  let test_suites = []

  if (props.data_project != null) {
    parsed_project_data = props.data_project
    project_name = parsed_project_data["projectName"]
    project_status = parsed_project_data["status"]
    executionID = parsed_project_data["executionID"]
    timeTaken = parsed_project_data["timeTaken"]/1000
    startTime = parsed_project_data["startTime"]

    for (let i = 0; i < parsed_project_data["testSuiteResultReports"].length; i++) {
      test_suites.push(
        <MiniTestSuite
          key={i}
          data_testsuite={parsed_project_data["testSuiteResultReports"][i]}
          executionID={executionID}
          handleTestSuiteDetails={props.handleTestSuiteDetails}
        />
      )
    }
  }

  return (
    <div className="project-container">
      <div className="project-container-header">
        <h3>{project_name}</h3>
        <h4>
          Execution ID:
          <br />
          {executionID}
          <br />
          <br />
          Completed In:
          <br/>
          {timeTaken} seconds
        </h4>
      </div>
      <div className="project-table">
        <h4>Test Suites:</h4>
        {test_suites}
      </div>
    </div>
  )
}

export default Project;
