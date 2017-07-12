import React, { Component } from 'react';
import { connect } from 'react-redux';

import JobList from '../JobList/JobList';
import Create from '../Create/Create';
import Login from '../Login/Login';

import './JobView.css';

class JobView extends Component {
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
    const isLoggedIn = this.props.user._id;

    return (
      <div className="App container-fluid">
        <div className="row">
          {isLoggedIn ? (
            <div className="isLoggedIn">
              <div className="col-md-2" id="JobList">
                <JobList setActiveJob={ this.setActiveJob } activeJob= {this.state.activeJob}/>
              </div>
              <div className="col-md-10" id="JobEdit">
                <Create job={this.state.activeJob}/>
              </div>
            </div>
          ) : (
            <div className="col-md-4 col-md-offset-4" id="Login">
              <Login/>
            </div>
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(JobView);
