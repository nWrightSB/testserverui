import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = props => {
  let app_name = props.app_name

  return (
    <div className="nav_container">
        {app_name}
        <ul>
            <li><Link to="/executions">Executions</Link></li>
        </ul>
    </div>
  )
}

export default Navigation;
