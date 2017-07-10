import React, { Component } from 'react';

import axios from 'axios';

import Header from '../Header/Header';
import './Search.css';

/**
 * Login
 */
export class Login extends Component { // eslint-disable-line react/prefer-stateless-function



  render() {
    return (
      <div className="col-md-12 searchbar">
        <input type="text" name="search" placeholder="Search.."/>
      </div>
    );
  }
}

export default Login;
