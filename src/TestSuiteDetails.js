import React from 'react';

const TestSuiteDetails = props => {
  let data_testsuite = props.data_teststeps
  let test_suite_name = data_testsuite["testSuiteName"]

  return (
    <tr className="project-row">
      <h3>Test Suite: {test_suite_name}</h3>
    </tr>
  )
}

export default TestSuiteDetails;
