import React from 'react';

const TestSuiteExecution = props => {
  let parsed_testsuite_data = null
  let project_name = null
  let test_suite_step_array = []

  if (props.data_testsuite != null) {
    parsed_testsuite_data = props.data_testsuite
    project_name = parsed_testsuite_data["projectName"]
  }

  return (
    <div className="project-execution-container">
      <h3>{project_name}</h3>
    </div>
  )
}

export default TestSuiteExecution;
