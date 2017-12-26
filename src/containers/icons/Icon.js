import React, { Component } from 'react';

class Icon extends Component {
  render() {
    return ( 
      <div className='icon-box' onDoubleClick={this.props.onDoubleClick}>
        <img onDoubleClick={this.props.action} src={this.props.url} className='icon'/>
        <p className='icon-text'>{this.props.text}</p>
      </div>
    );
  }
};

export default Icon;