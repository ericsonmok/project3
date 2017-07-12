import React, { Component,PropTypes } from 'react';
import axios from 'axios';


/**
 * Create
 */
export class TalentForm extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);

    this.state = {
      talent: null
    }
  }

  componentWillReceiveProps(nextProps) {

    axios.get('/talent/'+ nextProps.talent)
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

  addNewTalent = (e) => {
    console.log('addNewTalent');

    axios.post('/talent', this.state.talent)
      .then( (response) => {
        this.setState({
          talent: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  updateTalent = (e) => {
    console.log('updateTalent');

    axios.put('/talent/'+ this.state.talent._id, {talent: this.state.talent})
      .then( (response) => {
        this.setState({
          talent: response.data
        })
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  deleteTalent = (e) => {
    console.log('deleteTalent');

    axios.delete('/talent/'+ this.state.talent._id)
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
      <div className="col-md-12 header">
        <h2>Your Profile</h2>
      </div>
      <form className="col-md-6 col-md-offset-1">
        <div className="clearfix"></div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text"
                 className="form-control"
                 id="name"
                 placeholder="First Name, Last Name"
                 onChange={this.onChange}
                 value={this.state.talent && this.state.talent.name ? this.state.talent.name : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input type="number"
                 className="form-control"
                 id="Contact"
                 placeholder="Mobile Number"/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text"
                 className="form-control"
                 id="address"
                 placeholder="Address"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.address ? this.state.talent.address : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <input type="text"
                 className="form-control"
                 id="qualification"
                 placeholder="Qualifications"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.qualification ? this.state.talent.qualification : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="skillList">Skills</label>
          <input type="text"
                 className="form-control"
                 id="skillList"
                 placeholder="3 skills you want to be known for"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.skillList ? this.state.talent.skillList : ""}/>
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input type="text"
                 className="form-control"
                 id="salary"
                 placeholder="Last Drawn Salary"
                 onChange={this.onChange}
                 value={ this.state.talent && this.state.talent.salary ? this.state.talent.salary : ""}/>
        </div>
        <button type="button"
                className="btn btn-primary col-md-3"
                onClick={ this.updateTalent }>Save</button>
        <button type="button"
                className="btn btn-primary col-md-3"
                onClick={ this.deletetalent }>Delete</button>

        <button type="button"
                className="btn btn-primary col-md-3"
                onClick={ this.addNewTalent }>Create</button>
        <button type="button"
                className="btn btn-primary col-md-3"
                onClick={ this.logout }>Logout</button>

      </form>

      </div>
    );
  }
}

export default TalentForm;
