import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import TalentView from './TalentView/TalentView';

import './TalentList.css';

/*Talent List*/
export class TalentList extends Component {

  constructor(props){
    super(props);

    this.state = {
      talents: [],
      activeTalent: this.props.activeTalent
    }
  }

  componentDidMount() {
    axios.get('/api/')
      .then( (response) => {
        console.log(response);
        this.setState({
          talents: response.data
        });
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  onClick = (id) => {
    this.props.setActiveTalent(id);
  }

  addTalents = () => {
    return this.state.talents.map((talent) => {
      let isActive = talent._id == this.state.activeTalent ? "active" : "";
      return ( <TalentView talent={talent} key={ talent._id} onClick={this.onClick} active={isActive} />)
    });
  }

  render() {
    return (
      <div className="row" id="TalentList">
        {this.addTalents()}
      </div>
    );
  }
}

export default TalentList;
