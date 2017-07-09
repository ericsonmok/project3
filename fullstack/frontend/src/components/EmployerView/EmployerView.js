import React, { Component, PropTypes } from 'react';

import './EmployerView.css';

/* Profile View */
export class EmployerView extends Component {

  onClick = (e) => {
    this.props.onClick(this.props.employer._id);
  }

  render() {
    return(
      <div className={"col-md-12 employerview " + this.props.active} onClick={this.onClick} >
        <div className="employerdescription">{this.props.employer.description}</div>
      </div>
    );
  }
}

export default EmployerView;
