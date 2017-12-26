import React, { Component } from 'react';
import { render } from 'react-dom';
import { Closebutton } from './Closebutton';

export class GreyBarExplorer extends Component {
  constructor() {
    super();  
  }

  render() {
    return (
      <div className="top-bar-grey">
        <p>File</p><p>Home</p><p>Share</p><p>View</p><p>Manage</p>
      </div>
    );
  }
}