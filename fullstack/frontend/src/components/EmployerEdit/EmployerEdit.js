import React, { Component } from 'react';
import axios from 'axios';

export class EmployerEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);

    this.state = {
      employer: null
    }
  }

  componentWillReceiveProps(nextProps) {

    axios.get('/api/'+ nextProps.employer)
      .then( (response) => {
        console.log("ActiveEmployer: ",response);
        this.setState({
          employer: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  onChange = (e) => {

    let employer = this.state.employer || {};
    const key = e.target.id;
    const value = e.target.value;
    employer[key] = value;

    this.setState({
      employer: employer
    });
  }

/*Add New Employer Function*/
  addNewEmployer = (e) => {
    console.log('addNewEmployer');

    axios.post('/api', this.state.employer)
      .then( (response) => {
        this.setState({
          employer: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

/*Update Employer Function*/
  updateEmployer = (e) => {
    console.log('updateEmployer');

    axios.put('/api/'+ this.state.employer._id, {employer: this.state.employer})
      .then( (response) => {
        this.setState({
          employer: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

/*Delete Employer Function*/
  deleteEmployer = (e) => {
    console.log('deleteEmployer');

    axios.delete('/api/'+ this.state.employer._id)
      .then( (response) => {
        this.setState({
          employer: null
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
        <h1>Edit Employer </h1>
      </div>

      <form className="col-md-6 col-md-offset-1">
        <div>
          <button type="button"
                  className="btn btn-success pull-left"
                  onClick={ this.addNewEmployer }>Add new employer</button>
          <button type="button"
                  className="btn btn-danger pull-right"
                  onClick={ this.logout }>Logout</button>
        </div>
        <div className="clearfix"></div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text"
                 className="form-control"
                 id="name"
                 placeholder="Name"
                 onChange={this.onChange}
                 value={ this.state.employer && this.state.employer.name ? this.state.employer.name : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text"
                 className="form-control"
                 id="address"
                 placeholder="Address"
                 onChange={this.onChange}
                 value={ this.state.employer && this.state.employer.address ? this.state.employer.address : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input type="contact"
                 className="form-control"
                 id="contact"
                 placeholder="Contact"
                 onChange={this.onChange}
                 value={ this.state.employer && this.state.employer.contact ? this.state.employer.contact : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text"
                 className="form-control"
                 id="email"
                 placeholder="Email"
                 onChange={this.onChange}
                 value={ this.state.employer && this.state.employer.email ? this.state.employer.email : ""}/>
        </div>

        <button type="button"
                className="btn btn-primary pull-left"
                onClick={ this.updateEmployer }>Update</button>
        <button type="button"
                className="btn btn-danger pull-right"
                onClick={ this.deleteEmployer }>Delete</button>
      </form>

      </div>
    );
  }
}

export default EmployerEdit;
