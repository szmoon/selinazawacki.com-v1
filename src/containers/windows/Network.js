import React, { Component } from 'react';
var createReactClass = require('create-react-class');
import Draggable from 'react-draggable';

import { Topbar } from './windowparts/Topbar';
import { GreyBarExplorer } from './windowparts/GreyBarExplorer';
import Icon from './../icons/Icon';

const Network = createReactClass( {
  render() {
    const styles = {
      top: 100,
      left: 450,
      width: 500,
      height: 400
    };
    if (this.props.linksWindow.open === true) {
      return (
        <Draggable handle="strong" onDrag={this.props.handleDrag}>
        <div className="window" style={styles}> 
          <strong className="cursor"><Topbar text='network connections' close={this.props.linksWindowClose}/></strong>
          <GreyBarExplorer />
          <div className="window-cont">
            <Icon text='twitter' url='./../../../images/icons/twitter-icon.png' action={this.props.aboutWindowOpen}/>
            <Icon text='github' url='./../../../images/icons/github-icon.png' action={this.props.aboutWindowOpen}/>
            <Icon text='linkedin' url='./../../../images/icons/linkedin-icon.png' action={this.props.aboutWindowOpen}/>
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

export default Network;