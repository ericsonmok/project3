import React, { Component, PropTypes } from 'react';

import './TalentView.css';

/* Profile View */
export class TalentView extends Component {

  onClick = (e) => {
    this.props.onClick(this.props.talent._id);
  }

  render() {
    return(
      <div className={"col-md-12 talentview " + this.props.active} onClick={this.onClick} >
        <div className="talentdescription">{this.props.talent.description}</div>
      </div>
    );
  }
}

export default TalentView;
