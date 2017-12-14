import React from 'react';
import './Pretty.css'

const PrettyData = props => {
  let to_pretty = props.data_request
  // REQUEST
  let request = to_pretty["log"]["entries"][0]["request"]
  let method = request["method"]
  let url = request["url"]
  // RESPONSE
  let response = to_pretty["log"]["entries"][0]["response"]["content"]["text"]
  console.log(to_pretty)

  // {to_pretty.log.entries[0].request}
  // {to_pretty["log"]["entries"][0]["response"]["content"]["text"]}

  return (
    <div className="data-container">
      <div className="request-data">
        <div className="request-method">
          {method}
        </div>
        <div className="request-url">
          {url}
        </div>
      </div>
      <pre className="response-data">
        {response}
      </pre>
    </div>
  )
}

export default PrettyData;
