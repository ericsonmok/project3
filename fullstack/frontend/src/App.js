import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmployerForm from './components/EmployerForm/EmployerForm';


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
            <div className="col-md-12">
              <EmployerForm/>
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
