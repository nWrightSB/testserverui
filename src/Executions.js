import React from 'react';
import MiniProject from './MiniProject'
import Project from './Project'
import TestSuite from './TestSuite'
import TestCase from './TestCase'
import Pretty from './Pretty'

const Executions = props => {
  let projectResultReports = []
  let project_comp = null
  let testsuite_comp = null
  let testcase_comp = null
  let data_project = props.data_project
  let data_testsuite = props.data_testsuite
  let data_testcase = props.data_testcase
  let data_teststep = props.data_teststep
  let request_comp = null

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

  if (data_project != null) {
    project_comp = <Project
                      data_project={data_project}
                      handleTestSuiteDetails={props.handleTestSuiteDetails}
                    />
  }

  if (data_testsuite != null) {
    testsuite_comp = <TestSuite
                          data_testsuite={data_testsuite}
                          data_executionID={props.data_executionID}
                          handleTestCaseDetails={props.handleTestCaseDetails}
                        />
  }

  if (data_testcase != null) {
    testcase_comp = <TestCase
                        data_testcase={data_testcase}
                        handleTestStepDetails={props.handleTestStepDetails}
                      />
  }

  if (data_teststep != null) {
    let data_request = JSON.parse(data_teststep)
    request_comp = <Pretty
                        data_request={data_request}
                      />
  }

  return (
    <div className="executions-container">
      <div className="projects-data">
        {projectResultReports}
      </div>
      <div className="testsuite-data">
        {project_comp}
        {testsuite_comp}
        {testcase_comp}
      </div>
      <div className="teststep-data">
        {request_comp}
      </div>
    </div>
  )
}

export default Executions;
