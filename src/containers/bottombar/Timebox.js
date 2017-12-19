import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class Timebox extends Component {
  constructor(props) {
    super(props);  
  }
  
  render() {
    var currentdate = new Date(); 
    var datetime =  currentdate.getHours() + ":"  
                    + currentdate.getMinutes();

    return (
      <div id="time-box">
        <p><img src='./../../images/volume.png' className='mini-icon'/></p><p>{datetime}</p>
      </div>
    );
  }
}