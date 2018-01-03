import React from 'react'
import Navigation from './Navigation'
import Login from './Login'
import Main from './Main'

const App = () => {
    <div>
        <header className="App-header">
          <Navigation 
            app_name={"ts_ui"}
          />
          <Login
            current_user={this.state.current_user}
            current_pw={this.state.current_pw}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
          />
        </header>
    </div>
}

export default App