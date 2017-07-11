import React, { Component, PropTypes } from 'react';

import './JobListView.css';

/**
 * JobListView
 */
export class JobListView extends Component { // eslint-disable-line react/prefer-stateless-function


  onClick = (e) => {
    this.props.onClick(this.props.job._id);
  }

  render() {

    const tmp = this.props.job.closingDate;
    console.log("Var :" + typeof(tmp));
    // const tmp1 =tmp.toDateString();
    // console.log("Var :" + tmp1);
    return (
      <div className={ "col-md-12 jobmini " + this.props.active} onClick={this.onClick} >
          <div className="title">{this.props.job.title}</div>
          <div className="skillList">{this.props.job.skillList}</div>
          <div className="closingDate">{this.props.job.closingDate}</div>
      </div>
    );
  }
}

export default JobListView;
