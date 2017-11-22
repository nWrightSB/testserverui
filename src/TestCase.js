import React from 'react';

const TestCase = props => {
  let data_testcase = props.data_testcase
  let testcase_name = data_testcase["testCaseName"]

  return (
    <div className="">
      <h2>{testcase_name}</h2>
    </div>
  )
}

export default TestCase;
