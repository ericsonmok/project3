import React, { Component } from 'react';

import JobList from './components/JobList/JobList';
import TalentList from './components/TalentList/TalentList';

import logo from './logo.svg';
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
    <div className="App container-fluid">
      <div className="row">
      <h1>Talent Match</h1>
        <div className="col-md-2" id="JobList">
          <JobList setActiveJob={ this.setActiveJob} activeJob= {this.state.activeJob}/>
        </div>
      </div>
    </div>
  );
}
}

export default App;
