import React, { Component } from 'react';
var createReactClass = require('create-react-class');

const FolderIcon = createReactClass( {
  render() {
    return (
      <div className='icon-box'>
        <img onDoubleClick={this.props.action} src={this.props.url} className='icon'/>
        <p className='icon-text'>{this.props.text}</p>
      </div>
    );
  }
});

export default FolderIcon;