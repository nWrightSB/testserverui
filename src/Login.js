import React from 'react';

const Login = props => {
  let current_user = props.current_user;
  let current_pw = props.current_pw;
  let status = "";

  if (current_user == null || current_pw === null) {
    status = "Please Login"
  } else {
    status = "Logged In as " + current_user
  }

  return (
    <div className="login_container">
      {status}
    </div>
  )
}

export default Login;
