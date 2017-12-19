import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class Closebutton extends Component {
  constructor() {
    super();  
    this.closeWindow = this.closeWindow.bind(this);
  }

  closeWindow() {
    console.log("closeWindow");
    this.props.update({windowOpen: false});
  }

  render() {
    return (
      <div className="close-button" onClick={this.closeWindow}>
        <p>X</p>
      </div>
    );
  }
}