import React from 'react';
import MiniProject from './MiniProject'
import Project from './Project'
import TestSuite from './TestSuite'
import TestCase from './TestCase'

const Executions = props => {
  let projectResultReports = []
  let data_project = props.data_project
  let data_testsuite = props.data_testsuite
  let data_testcase = props.data_testcase

  if (props.data_executions != null) {
    let parsed_data_executions = JSON.parse(props.data_executions)

    for (let i = 0; i < 10; i++) {
      let single_exec = parsed_data_executions['projectResultReports'][i]
      projectResultReports.push(
        <MiniProject
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
        <h3>RUNS</h3>
        {projectResultReports}
      </div>
      <div className="testsuite-data">
        <h3>PROJECT</h3>
        <Project
          data_project={data_project}
          handleTestSuiteDetails={props.handleTestSuiteDetails}
        />
        <TestSuite
          data_testsuite={data_testsuite}
          handleTestCaseDetails={props.handleTestCaseDetails}
        />
        <TestCase
          data_testcase={data_testcase}
        />
      </div>
      <div className="teststep-data">
        <h3>DETAILS</h3>
      </div>
    </div>
  )
}

export default Executions;
