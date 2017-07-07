import React, { Component, PropTypes } from 'react';

import './JobSpec.css';

/* Job Spec */
export class JobSpec extends Component {

  onClick = (e) => {
    this.props.onClick(this.props.job._id);
  }

  render() {
    return(
      <div className={"col-md-12 jobspec " + this.props.active} onClick={this.onClick} >
        <div className="employerdescription">{this.props.job.employerdescription}</div>
      </div>
    );
  }
}

export default JobSpec;
