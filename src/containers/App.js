import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

import { Bottombar } from './bottombar/Bottombar';
import { Startmenu } from './Startmenu';
import About from './windows/About';

function mapStateToProps(state) {
  return {
  }
}

function mapStateToPropsAbout(state) {
  return {
    aboutWindow: state.aboutWindow
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.update = this.update.bind(this);
    this.clickIcon = this.clickIcon.bind(this);
  }

  update(obj) {
    this.setState(obj);
    console.log("updated state");
  }

  clickIcon() {
    console.log("double clicked!");
  }

  render() {
    let folders = [
      <img key='about' src='./images/folder.png' className='icon'/>,
      <img key='folder' src='./images/folder.png' className='icon'/>
    ];

    let About2 = connect(mapStateToPropsAbout, mapDispatchToProps)(About);

    return (
      <div>
        <div className='divblock'>
          {folders}
          <About2 />
          <Bottombar />
        </div>
      </div>
    );
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);