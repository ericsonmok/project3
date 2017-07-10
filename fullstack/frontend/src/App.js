import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import JobList from './components/JobList/JobList';
import JobSpec from './components/JobSpec/JobSpec';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Signup from './components/Signup/Signup';
import RegisterTalent from './components/RegisterTalent/RegisterTalent';
import RegisterEmployer from './components/RegisterEmployer/RegisterEmployer';

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
    const isLoggedIn = this.props.user._id;

    return (

      <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/registertalent' component={RegisterTalent} />
            <Route exact path='/registeremployer' component={RegisterEmployer} />
            <Route render={() => {
              return <p>Not Found</p>
            }} />
          </Switch>
      </Router>
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
