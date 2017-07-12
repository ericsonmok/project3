import React, { Component } from 'react';
import { connect } from 'react-redux';

import TalentForm from './components/TalentForm/TalentForm';


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
              <TalentForm/>
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
