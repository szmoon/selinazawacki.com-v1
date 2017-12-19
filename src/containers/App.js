import React, { Component } from 'react';
import { render } from 'react-dom';
import { Bottombar } from './bottombar/Bottombar';
import { Window } from './windows/Window';
import { Startmenu } from './Startmenu';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

import { withRouter } from 'react-router-dom';


const styles = {
  title: {
    cursor: 'pointer',
  },
  appBar: {
    height: 60,
    backgroundColor: '#2b2b2b',
  }
};

function mapStateToProps(state) {
  return {
    candaceView: state.candaceView,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      windowOpen: true,
      startMenu: false
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
    this.setState({windowOpen: true});
  }

  render() {
    if (this.state.windowOpen === true) {
    return (
      <div id="app">
        <div className='divblock'><img src='./images/folder.png' className='icon' onDoubleClick={this.clickIcon}/>
        <img src='./images/folder.png' className='icon'/>
        <img src='./images/folder.png' className='icon'/></div>
        <Bottombar update={this.update}/>
        <Window update={this.update}/>
      </div>
    );
    }
    else if (this.state.windowOpen === false) {
      return (
        <div id="app">
         <div className='divblock'><img src='./images/folder.png' className='icon' onDoubleClick={this.clickIcon}/>
          <img src='./images/folder.png' className='icon'/>
          <img src='./images/folder.png' className='icon'/></div>
          <Bottombar update={this.update}/>
        </div>
      );
    }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);