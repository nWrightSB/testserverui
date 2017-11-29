import React from 'react';
import MiniTestCase from './MiniTestCase.js'

const TestSuite = props => {
  let data_testsuite = props.data_testsuite
  let testsuite_name = null
  let testcases = []

  if (data_testsuite) {
    testsuite_name = data_testsuite["testSuiteName"]

    for (let i = 0; i < data_testsuite["testCaseResultReports"].length; i++) {
      testcases.push(
        <MiniTestCase
          key={i}
          data_testcase={data_testsuite["testCaseResultReports"][i]}
          testsuite_name={testsuite_name}
          executionID={props.data_executionID}
          handleTestCaseDetails={props.handleTestCaseDetails}
        />
      )
    }
  }

  return (
    <div className="testcase-container">
      <h4>Test Cases:</h4>
      {testcases}
    </div>
  )
}

export default TestSuite;
