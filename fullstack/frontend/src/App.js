import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './components/Login/Login';
import JobView from './components/JobView/JobView';


import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeJob: ""
    }
  }


  setActiveJob = (id) => {

    console.log("Active job: ", id);

    this.setState({
      activeJob: id
    })
  }

  render() {
    return (
            <div className="col-md-4 col-md-offset-4" id="Login">
              <Login/>
            </div>
          );
        }
      }
      const mapStateToProps = (state) => {
          return {
              user: state.user
          }
      }

      const mapDispatchToProps = (dispatch) => {
        return {
        }
      }
      
export default connect (mapStateToProps, mapDispatchToProps)(App);
