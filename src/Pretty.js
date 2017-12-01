import React from 'react';
import './Pretty.css'

const Pretty = props => {
  let to_pretty = props.data_request

  return (
    <div className="request-container">
      <pre className="pre">
        {to_pretty["log"]["entries"][0]["response"]["content"]["text"]}
      </pre>
    </div>
  )
}

export default Pretty;
