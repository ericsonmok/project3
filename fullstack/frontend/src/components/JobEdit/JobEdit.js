import React, { Component } from 'react';
import axios from 'axios';

export class JobEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);

    this.state = {
      job: null
    }
  }

  componentWillReceiveProps(nextProps) {

    axios.get('/api/'+ nextProps.car)
      .then( (response) => {
        console.log("ActiveJob: ",response);
        this.setState({
          job: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  onChange = (e) => {

    let job = this.state.job || {};
    const key = e.target.id;
    const value = e.target.value;
    job[key] = value;

    this.setState({
      job: job
    });
  }

/*Add New Job Function*/
  addNewJob = (e) => {
    console.log('addNewJob');

    axios.post('/api', this.state.job)
      .then( (response) => {
        this.setState({
          job: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

/*Update Job Function*/
  updateJob = (e) => {
    console.log('updateJob');

    axios.put('/api/'+ this.state.job._id, {job: this.state.job})
      .then( (response) => {
        this.setState({
          job: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

/*Delete Job Function*/
  deleteJob = (e) => {
    console.log('deleteJob');

    axios.delete('/api/'+ this.state.job._id)
      .then( (response) => {
        this.setState({
          job: null
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  logout = () =>{
    axios.get('/auth/logout')
      .then( (response) => {
        console.log("AJAX: Logged out @ '/auth/logout'");
        window.location.href = "/";
      })
      .catch((error)=> {
        console.log(error);
      });


  }


  render() {
    return (
      <div className="row">

      <div className="col-md-12">
        <h1>Edit job </h1>
      </div>

      <form className="col-md-6 col-md-offset-1">
        <div>
          <button type="button"
                  className="btn btn-success pull-left"
                  onClick={ this.addNewJob }>Add new job</button>
          <button type="button"
                  className="btn btn-danger pull-right"
                  onClick={ this.logout }>Logout</button>
        </div>
        <div className="clearfix"></div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text"
                 className="form-control"
                 id="title"
                 placeholder="Title"
                 onChange={this.onChange}
                 value={ this.state.job && this.state.job.title ? this.state.job.title : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="maxSalary">Max Salary</label>
          <input type="text"
                 className="form-control"
                 id="maxSalary"
                 placeholder="maxSalary"
                 onChange={this.onChange}
                 value={ this.state.job && this.state.job.maxSalary ? this.state.job.maxSalary : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <input type="number"
                 className="form-control"
                 id="qualification"
                 placeholder="qualification"
                 onChange={this.onChange}
                 value={ this.state.job && this.state.job.qualification ? this.state.job.qualification : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="skillList">Skill List</label>
          <input type="text"
                 className="form-control"
                 id="skillList"
                 placeholder="skillList"
                 onChange={this.onChange}
                 value={ this.state.job && this.state.job.skillList ? this.state.job.skillList : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="closingDate">Closing</label>
          <input type="number"
                 className="form-control"
                 id="closingDate"
                 placeholder="closingDate"
                 onChange={this.onChange}
                 value={ this.state.job && this.state.job.closingDate ? this.state.job.closingDate : ""}/>

        <button type="button"
                className="btn btn-primary pull-left"
                onClick={ this.updateCar }>Update</button>
        <button type="button"
                className="btn btn-danger pull-right"
                onClick={ this.deleteCar }>Delete</button>
      </form>



      </div>
    );
  }
}

export default JobEdit;
