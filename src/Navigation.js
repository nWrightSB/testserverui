import React from 'react';

const Navigation = props => {
  let app_name = props.app_name

  return (
    <div className="nav_container">
      {app_name}
    </div>
  )
}

export default Navigation;
