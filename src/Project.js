import React from 'react';
import MiniTestSuite from './MiniTestSuite'

const Project = props => {
  let parsed_project_data = null
  // PROJECT LEVEL DATA
  let project_name = null
  let project_status = null
  let executionID = null
  let timeTaken = null
  let start_time = null
  let customClass = "project-container-header"
  // TESTSUITE DATA
  let test_suites = []

  if (props.data_project != null) {
    parsed_project_data = props.data_project
    project_status = parsed_project_data["status"]
    executionID = parsed_project_data["executionID"]
    timeTaken = parsed_project_data["timeTaken"]/1000 + " seconds"
    let startTime = new Date(parsed_project_data["startTime"])
    start_time = startTime.getHours().toString() + ":" + startTime.getMinutes().toString()
    project_name = parsed_project_data["projectName"]

    if (project_status === "FAILED") {
      customClass += " failed"
    } else {
      customClass += " success"
    }

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
  // PROJECT RUN DETAILS - TO BE SHOWN ON BUTTON CLICK
  // <h4>
  // Execution ID:
  // <br />
  // {executionID}
  // <br />
  // <br />
  // Start Time:
  // <br />
  // {start_time}
  // <br />
  // <br />
  // Completed In:
  // <br/>
  // {timeTaken}
  // </h4>

  return (
    <div className="project-container">
      <div className={customClass}>
        <h3>{project_name}</h3>
        <h4>{project_status}</h4>
      </div>
      <div className="project-table">
        <h3>TEST SUITES</h3>
        {test_suites}
      </div>
    </div>
  )
}

export default Project;
