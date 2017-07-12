import React, { Component } from 'react';
import { connect } from 'react-redux';

import JobList from './components/JobList/JobList';
import Create from './components/Create/Create';
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
    //const isLoggedIn = this.props.user._id;

    return (
      <div className="App container-fluid">
        <div className="row">
          <JobView/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
