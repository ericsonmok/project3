import React, { Component } from 'react';

import axios from 'axios';

import Header from '../Header/Header';
import './RegisterTalent.css';

/**
 * Login
 */
export class RegisterTalent extends Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <form action="/registertalent" method="post">
        <div className="col-md-offset-12 header">
        <Header/>
        </div>
        <h2>Register Talent Profile</h2>
         <div className="form-group col-md-5">
           <label htmlFor="InputEmail">Name</label>
           <input type="text" name="name" className="form-control name" id="InputName" placeholder="Name" />
         </div>
         <div className="form-group col-md-5">
           <label htmlFor="InputContact">Contact</label>
           <input type="text" name="text" className="form-control contact" id="InputContact" placeholder="Contact" />
         </div>
         <div className="form-group col-md-5">
           <label htmlFor="InputAddress">Address</label>
           <input type="text" name="address" className="form-control address" id="InputAddress" placeholder="Address" />
         </div>
         <div className="form-group col-md-5">
           <label htmlFor="InputAddress">Qualification</label>
           <input type="text" name="qualification" className="form-control qualification" id="InputQualification" placeholder="Qualification" />
         </div>
         <div className="form-group col-md-5">
           <label htmlFor="InputSkillList ">Skills</label>
           <input type="text" name="skillList" className="form-control skillList" id="InputSkillList" placeholder="SkillList" />
         </div>
         <div className="form-group col-md-5">
           <label htmlFor="InputSalary">Last Drawn Salary</label>
           <input type="text" name="salary" className="form-control salary" id="InputSalary" placeholder="$" />
         </div>
         <div className="form-group col-md-9">
         <button type="submit" className="btn btn-primary">Register Talent Profile</button>
         </div>
      </form>

    );
  }
}

export default RegisterTalent;
