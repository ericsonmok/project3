import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import JobSpec from '../JobSpec/JobSpec';

import './JobList.css';

/*Jobs List*/
export class JobList extends Component {

  constructor(props){
    super(props);

    this.state = {
      jobs: [],
      activeJob: this.props.activeJob
    }
  }

  componentDidMount() {
    axios.get('/api/')
      .then( (response) => {
        console.log(response);
        this.setState({
          jobs: response.data
        });
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  onClick = (id) => {
    this.props.setActiveJob(id);
  }

  addJobs = () => {
    return this.state.jobs.map((job) => {
      let isActive = job._id == this.state.activeJob ? "active" : "";
      return ( <JobSpec job={job} key={ job._id} onClick={this.onClick} active={isActive} />)
    });
  }

  render() {
    return (
      <div className="row" id="JobList">
        {this.addJobs()}
      </div>
    );
  }
}

export default JobList;
