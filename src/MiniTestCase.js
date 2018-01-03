import React from 'react';

const MiniTestCase = props => {
  let data_testcase = props.data_testcase
  let testcase_name = null
  let executionID = null
  let testsuite_name = null
  let customIconClass = "testsuite-checkmark-container success"
  let customIcon = "fa fa-check-circle fa-lg"
  let assertionStatus = null

  if (data_testcase) {
    testcase_name = data_testcase["testCaseName"]
    testsuite_name = props.testsuite_name
    executionID = props.executionID
    
    for (let i = 0; i < data_testcase["testStepResultReports"].length; i++) {
      let current_status = data_testcase["testStepResultReports"][i]["assertionStatus"]
      if (current_status === "FAILED") {
        customIconClass = "testsuite-checkmark-container failed"
        customIcon = "fa fa-times-circle fa-lg"
      }
    }
    
  }

  return (
    <div className="mini-testsuite-container" onClick={() => props.handleTestCaseDetails(executionID, testsuite_name, testcase_name)}>
      <div className={customIconClass}>
        <i className={customIcon} aria-hidden="true"></i>
      </div>
      <div className="testsuite-name-container">
        <h4>{testcase_name}</h4>
      </div>
    </div>
  )
}

export default MiniTestCase;
