<img key='folder' src='./images/folder.png' className='icon'/>

import React, { Component } from 'react';
var createReactClass = require('create-react-class');

const Folder = createReactClass( {
  render() {
    return (
      <div>
        <img onDoubleClick={this.props.action} src='./../../../images/icons/folder.png' className='icon'/>
      </div>
    );
    
  }
});

export default Folder;