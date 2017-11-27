import React from 'react';

const MiniTestCase = props => {
  let data_testcase = props.data_testcase
  let testcase_name = null

  if (data_testcase) {
    testcase_name = data_testcase["testCaseName"]
  }
  // let data_teststeps = data_testcase["testStepResultReports"]
  //
  // for (let i = 0; i < data_teststeps.length; i++) {
  //   teststeps.push(
  //     <TestStep
  //       key={i}
  //       data_teststep={data_teststeps[i]}
  //     />
  //   )
  // }

  return (
    <div className="" >
      <h2>{testcase_name}</h2>
    </div>
  )
}

export default MiniTestCase;
