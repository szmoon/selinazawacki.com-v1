import React, { Component } from 'react';
import { render } from 'react-dom';
import { Closebutton } from './Closebutton';

export class Topbargrey extends Component {
  constructor() {
    super();  
  }

  render() {
    return (
      <div className="top-bar-grey">
        <p>File</p><p>Edit</p><p>Format</p><p>View</p><p>Help</p>
      </div>
    );
  }
}