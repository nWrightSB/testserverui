import React from 'react';

const TestSuite = props => {
  let data_testsuite = props.data_testsuite
  let testsuite_name = null
  let testcases = []

  if (data_testsuite) {
    testsuite_name = data_testsuite["testSuiteName"]
    for (let i = 0; i < data_testsuite["testCaseResultReports"].length; i++) {
      testcases.push(data_testsuite["testCaseResultReports"][i]["testCaseName"])
    }
  }

  return (
    <div className="">
      {testcases}
    </div>
  )
}

export default TestSuite;
