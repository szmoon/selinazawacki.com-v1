import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class Closebutton extends Component {
  constructor() {
    super();  
  }

  render() {
    return (
      <div className="close-button" onClick={this.props.close}>
        <p>X</p>
      </div>
    );
  }
}