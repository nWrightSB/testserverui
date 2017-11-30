import React from 'react';
import MiniTestCase from './MiniTestCase.js'

const TestSuite = props => {
  let data_testsuite = props.data_testsuite
  let testsuite_name = null
  let testcases = []
  let customClass = "project-container-header success"
  let assertionStatus = null

  if (data_testsuite) {
    testsuite_name = data_testsuite["testSuiteName"]

    for (let i = 0; i < data_testsuite["testCaseResultReports"].length; i++) {
      let currentTestCase = data_testsuite["testCaseResultReports"][i]["testStepResultReports"]

      for (let n = 0; n < currentTestCase.length; n++){
        assertionStatus = currentTestCase[n]["assertionStatus"]
        if (assertionStatus === "FAILED") {
          customClass = "project-container-header failed"
        }
      }

      testcases.push(
        <MiniTestCase
          key={i}
          data_testcase={data_testsuite["testCaseResultReports"][i]}
          assertionStatus={assertionStatus}
          testsuite_name={testsuite_name}
          executionID={props.data_executionID}
          handleTestCaseDetails={props.handleTestCaseDetails}
        />
      )
    }
  }

  return (
    <div className="project-container">
      <div className={customClass}>
        <h3>
          {testsuite_name}
        </h3>
      </div>
      <div className="project-table">
        <h3>TEST CASES</h3>
        {testcases}
      </div>
    </div>
  )
}

export default TestSuite;
