import React from 'react';

const MiniTestSuite = props => {
  let executionID = props.executionID
  let data_testsuite = props.data_testsuite
  let testsuite_name = data_testsuite["testSuiteName"]
  let testcase_data = data_testsuite["testCaseResultReports"]
  let customClass = "testsuite-checkmark-container success"
  let customIcon = "fa fa-check-circle fa-lg"
  let failure_count = 0
  let failure_message = ""

  for (let i = 0; i < testcase_data.length; i++) {
    for(let n = 0; n < testcase_data[i]["testStepResultReports"].length; n++){
      if (testcase_data[i]["testStepResultReports"][n]["assertionStatus"] === "FAILED") {
        customClass = "testsuite-checkmark-container failed"
        customIcon = "fa fa-times-circle fa-lg"
        failure_count += 1
      }
    }
  }

  if (failure_count === 1) {
    failure_message = failure_count + " testcase failure - "
  } else if (failure_count > 1) {
    failure_message = failure_count + " testcase failures - "
  }

  return (
    <div className="mini-testsuite-container" onClick={() => props.handleTestSuiteDetails(executionID, testsuite_name)}>
      <div className={customClass}>
        <i className={customIcon} aria-hidden="true"></i>
      </div>
      <div className="testsuite-name-container">
        <h4><em>{failure_message}</em>{testsuite_name}</h4>
      </div>
    </div>
  )
}
export default MiniTestSuite;
