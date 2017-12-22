import React, { Component } from 'react';
var createReactClass = require('create-react-class');

const ImageIcon = createReactClass( {
  render() {
    return (
      <div className='icon-box'>
        <img onDoubleClick={this.props.action} src={this.props.url} className='icon-image'/>
        <p className='icon-text'>{this.props.text}</p>
      </div>
    );
  }
});

export default ImageIcon;