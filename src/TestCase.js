import React from 'react';
import TestStep from './TestStep'

const TestCase = props => {
  let data_testcase = props.data_testcase
  let testcase_name = data_testcase["testCaseName"]
  let teststeps = []
  let assertionStatus = null
  let customClass = "project-container-header success"

  if (data_testcase) {
    let data_teststeps = data_testcase["testStepResultReports"]

    for (let i = 0; i < data_teststeps.length; i++) {
      let currentTestStep = data_teststeps[i]
      assertionStatus = currentTestStep["assertionStatus"]

      if (assertionStatus === "FAILED") {
        customClass = "project-container-header failed"
      }

      teststeps.push(
        <TestStep
          key={i}
          data_teststep={data_teststeps[i]}
          assertionStatus={assertionStatus}
          handleTestStepDetails={props.handleTestStepDetails}
        />
      )
    }
  }

  return (
    <div className="project-container">
      <div className={customClass}>
        <h3>
          {testcase_name}
        </h3>
      </div>
      <div className="project-table">
        <h3>TEST CASES</h3>
        {teststeps}
      </div>
    </div>
  )
}

export default TestCase;
