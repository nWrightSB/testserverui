import React from 'react';

const MiniProject = props => {
  let parsed_project_data = ""
  let project_name = ""
  let executionID = ""
  let status = ""
  let customClass = "project-status"
  let start_time = ""
  let formatted_date = ""
  let formatted_time = ""

  if (props.project_data != null) {
    parsed_project_data = props.project_data
    project_name = parsed_project_data["projectName"]
    status = parsed_project_data["status"]
    executionID = parsed_project_data["executionID"]
    start_time = new Date(parsed_project_data["startTime"])
    let start_time_minutes = start_time.getMinutes()
    if (start_time_minutes < 10) {
      start_time_minutes = "0" + start_time_minutes
    }
    formatted_time = start_time.getHours() + ":" + start_time_minutes
    formatted_date = (start_time.getMonth() + 1) + "/" + start_time.getDate()
  }

  if (status === "FAILED") {
    customClass += " failed"
  } else {
    customClass += " success"
  }

  return (
    <div className="project-execution-container" onClick={() => props.handleProjectDetails(executionID)}>
      <div className={customClass}>
        <h1>{status}</h1>
      </div>
      <div className="project-details">
        <h3>
          Project:<br/>
          {project_name}<br/>
        </h3>
        <h3>
          Start Time:<br/>
          {formatted_date} {formatted_time}
        </h3>
      </div>
      <div className="details-bar">
        <h4>DETAILS  <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></h4>
      </div>
    </div>
  )
}

export default MiniProject;
