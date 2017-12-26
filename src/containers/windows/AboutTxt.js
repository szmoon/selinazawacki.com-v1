import React, { Component } from 'react';
var createReactClass = require('create-react-class');
import Draggable from 'react-draggable';

import { Topbar } from './windowparts/Topbar';
import { GreyBarTxt } from './windowparts/GreyBarTxt';

const About = createReactClass( {
  render() {
    const styles = {
      top: this.props.aboutTxt.top,
      left: this.props.aboutTxt.left,
      width: 400,
      height: 400
    };
    if (this.props.aboutTxt.txt === true) {
      return (
        <Draggable handle="strong" onDrag={this.props.handleDrag}>
        <div className="window" style={styles}> 
          <strong className="cursor"><Topbar text='about.txt' close={this.props.aboutTxtClose}/></strong>
          <GreyBarTxt />
          <div className="window-cont">
          <p>Software developer and mentor specializing in JavaScript, Node and making best use of React lifecycle methods. Experienced in circuitry, Arduino and Python.</p>
          <br></br>
          <p>Always looking for opportunities to do outreach to get young women, minorities and low income students interested in technology.</p>
          <br></br>
          <p>Website created using React/Redux. Continually adding on to it in my spare time. :)</p>
          </div>
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