import React from 'react';
import Draggable from 'react-draggable';

import { Topbar } from './../../components/windows/Topbar';
import { GreyBarExplorer } from './../../components/windows/GreyBarExplorer';

class AboutImage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const styles = {
      top: this.props.aboutImage.top,
      left: this.props.aboutImage.left,
      width: 300
    };
    if (this.props.aboutImage.image === true) {
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
        null
      );
    }
    
  }
};

export default AboutImage;