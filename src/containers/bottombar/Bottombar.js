import React, { Component } from 'react';
import { render } from 'react-dom';
import { Startbutton } from './Startbutton';
import { Timebox } from './Timebox';
 
export class Bottombar extends Component {
  constructor(props) {
    super(props);  
  }
  
  render() {
    return (
      <div id="bottom-bar">
        <Startbutton update={this.props.update}/>
        <Timebox />
      </div>
    );
  }
}