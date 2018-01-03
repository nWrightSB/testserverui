import React from 'react';

const Login = props => {
  let current_user = props.current_user;
  let current_pw = props.current_pw;
  let status = "";
  let form = "";
  let login_button = "";

  if (current_user === null || current_pw === null) {
    form = <form id="login-form">
              USERNAME:
              <input type="text" id="username"></input>
              PASSWORD:
              <input type="password" id="password"></input>
            </form>
    login_button = <button onClick={() => props.handleLogin(
                      "defaultUser", "newPass"
                        // document.getElementById('username').value,
                        // document.getElementById('password').value
                      )
                      } id="login">
                      Login
                      <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
  } else {
    status = 'Logged In As:' + current_user
    login_button = <button onClick={() => props.handleLogout()} id="logout">
                      Logout
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </button>
  }

  return (
    <div className="login_container">
      {form}
      {status}
      {login_button}
    </div>
  )
}

export default Login;
