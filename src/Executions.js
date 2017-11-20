import React from 'react';
import ProjectExecution from './ProjectExecution'
import TestSuiteExecution from './TestSuiteExecution'

const Executions = props => {
  let projectResultReports = []
  let data_testsuite = props.data_testsuite

  if (props.data_executions != null) {
    let parsed_data_executions = JSON.parse(props.data_executions)

    for (let i = 0; i < 10; i++) {
      let single_exec = parsed_data_executions['projectResultReports'][i]
      projectResultReports.push(
        <ProjectExecution
          project_data={single_exec}
          key={i}
          handleProjectDetails={props.handleProjectDetails}
        />
      )
    }
  }

  return (
    <div className="executions-container">
      <div className="projects-data">
        <h3>PROJECT</h3>
        {projectResultReports}
      </div>
      <div className="testsuite-data">
        <h3>TEST SUITES</h3>
        <TestSuiteExecution
          data_testsuite={data_testsuite}
        />
      </div>
      <div className="teststep-data">
        <h3>DETAILS</h3>
      </div>
    </div>
  )
}

export default Executions;
