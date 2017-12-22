import React, { Component } from 'react';
var createReactClass = require('create-react-class');
import Draggable from 'react-draggable';

import { Topbar } from './windowparts/Topbar';
import { GreyBarExplorer } from './windowparts/GreyBarExplorer';
import FolderIcon from './../icons/FolderIcon';
import TxtIcon from './../icons/TxtIcon';
import ImageIcon from './../icons/ImageIcon';

const About = createReactClass( {
  render() {
    if (this.props.aboutWindow.open === true) {
      return (
        <Draggable handle="strong" onDrag={this.props.handleDrag}>
        <div className="window"> 
          <strong className="cursor"><Topbar text='about' close={this.props.aboutWindowClose}/></strong>
          <GreyBarExplorer />
          <div className="window-cont">
            <TxtIcon text='about.txt' action={this.props.aboutWindowOpen}/>
            <ImageIcon text='selina.png' url='./../../images/icons/selina-icon.png' action={this.props.aboutWindowOpen}/>
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