import React from 'react';

const MiniTestSuite = props => {
  let executionID = props.executionID
  let data_testsuite = props.data_testsuite
  let testsuite_name = data_testsuite["testSuiteName"]

  return (
    <div className="mini-testsuite-container" onClick={() => props.handleTestSuiteDetails(executionID, testsuite_name)}>
      <h2>{testsuite_name}</h2>
    </div>
  )
}

export default MiniTestSuite;
