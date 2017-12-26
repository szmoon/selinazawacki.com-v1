import React, { Component } from 'react';
var createReactClass = require('create-react-class');
import Draggable from 'react-draggable';

import { Topbar } from './windowparts/Topbar';
import { GreyBarExplorer } from './windowparts/GreyBarExplorer';
import TxtIcon from './../icons/TxtIcon';
import ImageIcon from './../icons/ImageIcon';

const About = createReactClass( {
  render() {
    const styles = {
      top: this.props.aboutWindow.top,
      left: this.props.aboutWindow.left,
      width: 500,
      height: 400
    };
    if (this.props.aboutWindow.open === true) {
      return (
        <Draggable handle="strong" onDrag={this.props.handleDrag}>
        <div className="window" style={styles}> 
          <strong className="cursor"><Topbar text='about' close={this.props.aboutWindowClose}/></strong>
          <GreyBarExplorer />
          <div className="window-cont">
            <TxtIcon text='about.txt' action={this.props.aboutTxtOpen}/>
            <ImageIcon text='selina.png' url='./../../images/icons/selina-icon.png' action={this.props.aboutImageOpen}/>
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