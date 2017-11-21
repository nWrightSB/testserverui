import React from 'react';

const ProjectExecution = props => {
  let parsed_project_data = ""
  let project_name = ""
  let executionID = ""
  let status = ""
  let customClass = "project-status"
  let start_time = null

  if (props.project_data != null) {
    parsed_project_data = props.project_data
    project_name = parsed_project_data["projectName"]
    status = parsed_project_data["status"]
    executionID = parsed_project_data["executionID"]
    start_time = new Date(parsed_project_data["startTime"]*1000)
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
        <h3>Project: <b>{project_name}</b></h3>
        <h3>Start Time: <b>{start_time.getHours().toString() + ":" + start_time.getMinutes().toString()}</b></h3>
      </div>
      <div className="details-bar">
        <h4>DETAILS  <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></h4>
      </div>
    </div>
  )
}

export default ProjectExecution;
