import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import JobListView from '../JobListView/JobListView';

import './JobList.css';

/****************************************************
 * JobList
 ***************************************************/
export class JobList extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);

    this.state = {
      jobs: [],
      activeJob: this.props.activeJob
    }
  }

  componentDidMount() {

    console.log("JobList.componentDidMount");

    axios.get('/job/')
      .then( (response) => {
        console.log("This is the response: " + response);
        this.setState({
          jobs: response.data
        });
      })
      .catch((error)=> {
        console.log("Err in CompDidMount: "+error);
      });
  }

  onClick = (id) => {
    this.props.setActiveJob(id);
  }

  addJobs = () => {
    return this.state.jobs.map((job) => {
      let isActive = job._id === this.state.activeJob ? "active" : "";
      return ( <JobListView job={job} key={ job._id } onClick={this.onClick} active={isActive} /> )
    });
  }

  render() {
    return (
      <div className="row" id="JobList">
        <div className="col-md-12" id="search">
          <input className="form-control" type="text" placeholder="Search" />
         </div>
         {this.addJobs()}
      </div>
    );
  }
}


export default JobList;
