import React from 'react';

const MiniTestCase = props => {
  let data_testcase = props.data_testcase
  let testcase_name = null
  let executionID = null
  let testsuite_name = null

  if (data_testcase) {
    testcase_name = data_testcase["testCaseName"]
    testsuite_name = props.testsuite_name
    executionID = props.executionID
  }

  return (
    <div className="mini-testcase" onClick={() => props.handleTestCaseDetails(executionID, testsuite_name, testcase_name)}>
      <h2>{testcase_name}</h2>
    </div>
  )
}

export default MiniTestCase;
