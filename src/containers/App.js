import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

import { Bottombar } from './bottombar/Bottombar';
import { Startmenu } from './Startmenu';
import About from './windows/About';
import Folder from './icons/Folder';

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
  }

  update(obj) {
    this.setState(obj);
    console.log("updated state");
  }

  render() {
    let About2 = connect(mapStateToPropsAbout, mapDispatchToProps)(About);
    let Folder2 = connect(mapStateToPropsAbout, mapDispatchToProps)(Folder);

    return (
      <div>
        <div className='divblock'>
          <Folder2 text='about' action={this.props.aboutWindowOpen}/>
        </div>
        <About2 />
        <Bottombar />
      </div>
    );
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);