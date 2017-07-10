import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import './Signup.css';

/**
 * Login
 */
export class Signup extends Component { // eslint-disable-line react/prefer-stateless-function



  render() {
    return (
      <div col-md-4 col-md-offset-12 header>
      <Header/>
      <div className="col-sm-6 col-sm-offset-3">
        <h1><span className="fa fa-sign-in" /> Signup</h1>
        {/* LOGIN FORM*/}
        <form action="/signup" method="post">
          <div className="form-group email">
            <label>Email</label>
            <input className="form-control" type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" name="password" />
          </div>
          <div className="col-md-12 signup">
          <button className="btn btn-primary btn-md" type="submit">Signup</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default Signup;
