import React from 'react';

const TestStep = props => {
  let data_teststep = props.data_teststep
  let teststep_name = data_teststep["testStepName"]

  return (
    <div className="teststep" onClick={() => props.handleTestStepDetails(teststep_name)}>
      <h2>{teststep_name}</h2>
    </div>
  )
}

export default TestStep;
