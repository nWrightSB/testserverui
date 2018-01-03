import React from 'react';
import ErrorMessage from './ErrorMessage'
import './RequestResponse.css'

const RequestResponse = props => {
  let to_pretty = props.data_request
  let data_messages = props.messages
  let messages = []
  let response = ""

  for (let i = 0; i < data_messages.length; i++) {
    let message = data_messages[i]
    messages.push(
      <ErrorMessage
        key={i}
        message={message}
      />
    )
  }

  // REQUEST
  let request = to_pretty["log"]["entries"][0]["request"]
  let method = request["method"]
  let url = request["url"]
  // RESPONSE
  if (to_pretty["log"]["entries"][0]["response"] === undefined) {
    response = ""
  } else {
    response = to_pretty["log"]["entries"][0]["response"]["content"]["text"]
  }
  
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
      <div className="response-data">
        {messages}
        <pre>
          {response}
        </pre>
      </div>

    </div>
  )
}

export default RequestResponse;
