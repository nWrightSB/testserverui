import React from 'react';
import TestSuiteDetails from './TestSuiteDetails'

const TestSuiteExecution = props => {
  let parsed_testsuite_data = null
  // PROJECT LEVEL DATA
  let project_name = null
  let project_status = null
  let executionID = null
  let timeTaken = null
  let startTime = null
  // TESTSUITE DATA
  let testSuites = []

  if (props.data_testsuite != null) {
    parsed_testsuite_data = props.data_testsuite
    project_name = parsed_testsuite_data["projectName"]
    project_status = parsed_testsuite_data["status"]
    executionID = parsed_testsuite_data["executionID"]
    timeTaken = parsed_testsuite_data["timeTaken"]/1000
    startTime = parsed_testsuite_data["startTime"]

    for (let i = 0; i < parsed_testsuite_data["testSuiteResultReports"].length; i++) {
      testSuites.push(
        <TestSuiteDetails
          key={i}
          data_teststeps={parsed_testsuite_data["testSuiteResultReports"][i]}
        />
      )
    }
  }

  return (
    <div className="project-container">
      <div className="project-container-header">
        <h3>{project_name}</h3>
        <h4>
          {executionID}
          <br />
          Completed In: {timeTaken} seconds
        </h4>
      </div>
      <table className="project-table">
        {testSuites}
      </table>
    </div>
  )
}

export default TestSuiteExecution;
