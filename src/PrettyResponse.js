import React from 'react';
import './Pretty.css'

const PrettyResponse = props => {
  let to_pretty = props.data_request

  return (
    <div className="request-container">
      <h3>Response:</h3>
      <pre className="pre">
        {to_pretty["log"]["entries"][0]["response"]["content"]["text"]}
      </pre>
    </div>
  )
}

export default PrettyResponse;
