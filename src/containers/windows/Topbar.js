import React, { Component } from 'react';
import { render } from 'react-dom';
import { Closebutton } from './Closebutton';

export class Topbar extends Component {
  constructor() {
    super();  
  }

  render() {
    return (
      <div className="top-bar">
        <p>About.txt</p>
        <Closebutton update={this.props.update}/>
      </div>
    );
  }
}