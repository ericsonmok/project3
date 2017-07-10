import React, { Component } from 'react';
import axios from 'axios';

export class talentEdit extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);

    this.state = {
      talent: null
    }
  }

  componentWillReceiveProps(nextProps) {

    axios.get('/api/'+ nextProps.car)
      .then( (response) => {
        console.log("ActiveTalent: ",response);
        this.setState({
          talent: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  onChange = (e) => {

    let talent = this.state.talent || {};
    const key = e.target.id;
    const value = e.target.value;
    talent[key] = value;

    this.setState({
      talent: talent
    });
  }

/*Add New Talent Function*/
  addNewTalent = (e) => {
    console.log('addNewTalent');

    axios.post('/api', this.state.talent)
      .then( (response) => {
        this.setState({
          talent: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

/*Update Talent Function*/
  updateTalent = (e) => {
    console.log('updateTalent');

    axios.put('/api/'+ this.state.talent._id, {talent: this.state.talent})
      .then( (response) => {
        this.setState({
          talent: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

/*Delete Talent Function*/
  deleteTalent = (e) => {
    console.log('deleteTalent');

    axios.delete('/api/'+ this.state.talent._id)
      .then( (response) => {
        this.setState({
          talent: null
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
        <h1>Edit talent </h1>
      </div>

      <form className="col-md-6 col-md-offset-1">
        <div>
          <button type="button"
                  className="btn btn-success pull-left"
                  onClick={ this.addNewTalent }>Add new talent</button>
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
                 placeholder="name"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.name ? this.state.talent.name : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text"
                 className="form-control"
                 id="email"
                 placeholder="email"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.email ? this.state.talent.email : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input type="number"
                 className="form-control"
                 id="contact"
                 placeholder="contact"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.contact ? this.state.talent.contact : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text"
                 className="form-control"
                 id="address"
                 placeholder="address"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.address ? this.state.talent.address : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input type="text"
                 className="form-control"
                 id="salary"
                 placeholder="salary"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.salary ? this.state.talent.salary : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="skillList">Skill List</label>
          <input type="text"
                 className="form-control"
                 id="skillList"
                 placeholder="skillList"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.skillList ? this.state.talent.skillList : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <input type="number"
                 className="form-control"
                 id="qualification"
                 placeholder="qualification"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.qualification ? this.state.talent.qualification : ""}/>

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

export default talentEdit;
