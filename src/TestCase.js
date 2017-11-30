import React from 'react';
import TestStep from './TestStep'

const TestCase = props => {
  let data_testcase = props.data_testcase
  let testcase_name = data_testcase["testCaseName"]
  let teststeps = []

  if (data_testcase) {
    let data_teststeps = data_testcase["testStepResultReports"]

    for (let i = 0; i < data_teststeps.length; i++) {
      teststeps.push(
        <TestStep
          key={i}
          data_teststep={data_teststeps[i]}
          handleTestStepDetails={props.handleTestStepDetails}
        />
      )
    }
  }

  return (
    <div className="teststep-container">
      <h4>{testcase_name}</h4>
      {teststeps}
    </div>
  )
}

export default TestCase;
