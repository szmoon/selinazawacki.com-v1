import React, { Component } from 'react';
import { render } from 'react-dom';
import { Closebutton } from './Closebutton';

export class Topbar extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <div className="top-bar">
        <p>{this.props.text}</p>
        <Closebutton close={this.props.close}/>
      </div>
    );
  }
}