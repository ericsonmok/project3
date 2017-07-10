import React, { Component } from 'react';

import axios from 'axios';

import Header from '../Header/Header';
import './RegisterEmployer.css';

/**
 * Login
 */
export class RegisterEmployer extends Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <form action="/registeremployer" method="post">
        <div className="col-md-offset-12 header">
        <Header/>
        </div>
        <h2>Register Employer Profile</h2>
         <div className="form-group col-md-5">
           <label htmlFor="InputEmail">Company Name</label>
           <input type="text" name="name" className="form-control name" id="InputName" placeholder="Name" />
         </div>
         <div className="form-group col-md-5">
           <label htmlFor="InputContact">Contact</label>
           <input type="text" name="contact" className="form-control contact" id="InputContact" placeholder="Contact" />
         </div>
         <div className="form-group col-md-12">
           <label htmlFor="InputAddress">Address</label>
           <input type="text" name="address" className="form-control address" id="InputAddress" placeholder="Address" />
         </div>

         <div className="form-group col-md-9">
         <button type="submit" className="btn btn-primary">Register Employer Profile</button>
         </div>
      </form>

    );
  }
}

export default RegisterEmployer;
