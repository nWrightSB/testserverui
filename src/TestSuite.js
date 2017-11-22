import React from 'react';
import TestCase from './TestCase'

const TestSuite = props => {
  let data_testsuite = props.data_testsuite
  let testsuite_name = null
  let testcases = []

  if (data_testsuite != null) {
    testsuite_name = data_testsuite["testSuiteName"]
    for (let i = 0; i < data_testsuite["testCaseResultReports"].length; i++){
      testcases.push(
        <TestCase
          data_testcase={data_testsuite["testCaseResultReports"][i]}
        />
      )
    }
  }

  return (
    <div className="">
      <h2>{testsuite_name}</h2>
      <hr />
      {testcases}
    </div>
  )
}

export default TestSuite;
