import React from 'react';

const ErrorMessage = props => {
  let message = props.message

  // ONCLICK FUNCTION TO HIGHLIGHT BAD DATA?
  return (
    <div className="error-message-container">
      <i className="fa fa-times-circle fa-2x" aria-hidden="true"></i>
      <h3>{message}</h3>
    </div>
  )
}

export default ErrorMessage;
