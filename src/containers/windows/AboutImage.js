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
    const styles = {
      top: 25,
      left: 1000,
      width: 300
    };
    if (this.props.aboutWindow.image === true) {
      return (
        <Draggable handle="strong" onDrag={this.props.handleDrag}>
        <div className="window-image" style={styles}> 
          <strong className="cursor"><Topbar text='about.png' close={this.props.aboutImageClose}/></strong>
          <GreyBarExplorer />
          <div className="window-cont">
            <img src='./../../images/pngs/selina-large.png' className='image'/>
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