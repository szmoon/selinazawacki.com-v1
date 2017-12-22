import React, { Component } from 'react';
var createReactClass = require('create-react-class');
import Draggable from 'react-draggable';

import { Topbar } from './windowparts/Topbar';
import { Topbargrey } from './windowparts/Topbargrey';

const About = createReactClass( {
  render() {
    if (this.props.aboutWindow.open === true) {
      return (
        <Draggable handle="strong" onDrag={this.props.handleDrag}>
        <div className="window"> 
          <strong className="cursor"><Topbar text='about.txt' close={this.props.aboutWindowClose}/></strong>
          <Topbargrey />
          {/* <div className="window-cont">
            ABOUT TEXT BOX
          </div> */}
        </div>
        </Draggable>
      );
    } else {
      return(
        <div></div>
      );
    }
    
  }
});

export default About;