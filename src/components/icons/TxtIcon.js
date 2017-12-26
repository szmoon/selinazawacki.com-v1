import React, { Component } from 'react';
var createReactClass = require('create-react-class');

const TxtIcon = createReactClass( {
  render() {
    return (
      <div className='icon-box'>
        <img onDoubleClick={this.props.action} src='./../../../images/icons/txt-icon.png' className='icon'/>
        <p className='icon-text'>{this.props.text}</p>
      </div>
    );
  }
});

export default TxtIcon;