import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import EmployerView from '../EmployerView/EmployerView';

import './EmployerList.css';

/*Jobs List*/
export class EmployerList extends Component {

  constructor(props){
    super(props);

    this.state = {
      employers: [],
      activeEmployer: this.props.activeEmployer
    }
  }

  componentDidMount() {
    axios.get('/api/')
      .then( (response) => {
        console.log(response);
        this.setState({
          employers: response.data
        });
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  onClick = (id) => {
    this.props.setActiveEmployer(id);
  }

  addEmployers = () => {
    return this.state.employers.map((employer) => {
      let isActive = employer._id == this.state.activeEmployer? "active" : "";
      return ( <EmployerView employer={employer} key={ employer._id} onClick={this.onClick} active={isActive} />)
    });
  }

  render() {
    return (
      <div className="row" id="EmployerList">
        {this.addEmployers()}
      </div>
    );
  }
}

export default EmployerList;
