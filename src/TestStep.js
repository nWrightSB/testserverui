import React from 'react';

const TestStep = props => {
  let data_teststep = props.data_teststep
  let teststep_name = data_teststep["testStepName"];
  let customClass = "testsuite-checkmark-container success"
  let customIcon = "fa fa-check-circle fa-lg"
  let assertionStatus = props.assertionStatus
  let transactionID = data_teststep["transactionId"]
  let messages = ""

  if (assertionStatus === "FAILED") {
    customClass = "testsuite-checkmark-container failed"
    customIcon = "fa fa-times-circle fa-lg"
    messages = data_teststep["messages"]
  }

  return (
    <div className="mini-testsuite-container" onClick={() => props.handleTestStepDetails(teststep_name, transactionID, messages)}>
      <div className={customClass}>
        <i className={customIcon} aria-hidden="true"></i>
      </div>
      <div className="testsuite-name-container">
        <h4>{teststep_name}</h4>
      </div>
    </div>
  )
}

export default TestStep;
