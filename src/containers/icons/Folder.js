import React, { Component } from 'react';
var createReactClass = require('create-react-class');

const Folder = createReactClass( {
  render() {
    return (
      <div className='icon-box'>
        <img onDoubleClick={this.props.action} src='./../../../images/icons/folder.png' className='icon'/>
        <p className='icon-text'>{this.props.text}</p>
      </div>
    );
  }
});

export default Folder;