import React from 'react';
import Draggable from 'react-draggable';

import { Topbar } from './windowparts/Topbar';
import { GreyBarExplorer } from './windowparts/GreyBarExplorer';
import Icon from './../icons/Icon';

class Network extends React.Component {
  constructor() {
    super();
    this.openUrl = this.openUrl.bind(this);
  }
  
  shouldComponentUpdate(nextProps) {
    if (this.props.linksWindow.open !== nextProps.linksWindow.open) {
      return true;
    } else {
      return false;
    }
  }

  openUrl(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  render() {
    const styles = {
      top: this.props.linksWindow.top,
      left: this.props.linksWindow.left,
      width: 500,
      height: 400
    };

    function test() {
      console.log('boo');
    }

    if (this.props.linksWindow.open === true) {
      return (
        <Draggable handle="strong" onDrag={this.props.handleDrag}>
        <div className="window" style={styles}> 
          <strong className="cursor"><Topbar text='network connections' close={this.props.linksWindowClose}/></strong>
          <GreyBarExplorer />
          <div className="window-cont">
            <Icon text='twitter' url='./../../../images/icons/twitter-icon.png' onDoubleClick={(e) => this.openUrl('https://twitter.com/selinazawacki', e)} />
            <Icon text='github' url='./../../../images/icons/github-icon.png' onDoubleClick={(e) => this.openUrl('https://github.com/szmoon', e)} />
            <Icon text='linkedin' url='./../../../images/icons/linkedin-icon.png' onDoubleClick={(e) => this.openUrl('https://www.linkedin.com/in/selina-chang-yi-zawacki/', e)} />
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
};

export default Network;