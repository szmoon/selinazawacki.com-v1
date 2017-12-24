import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

import { Bottombar } from './bottombar/Bottombar';
import { Startmenu } from './Startmenu';
import Icon from './icons/Icon';
import About from './windows/About';
import AboutImage from './windows/AboutImage';
import AboutTxt from './windows/AboutTxt';
import Network from './windows/Network';

function mapStateToProps(state) {
  return {
  }
}

function mapStateToPropsAbout(state) {
  return {
    aboutWindow: state.aboutWindow
  }
}

function mapStateToPropsLinks(state) {
  return {
    linksWindow: state.linksWindow
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
    let AboutImage2 = connect(mapStateToPropsAbout, mapDispatchToProps)(AboutImage);
    let AboutTxt2 = connect(mapStateToPropsAbout, mapDispatchToProps)(AboutTxt);
    let AboutFolder = connect(mapStateToPropsAbout, mapDispatchToProps)(Icon);
    let Network2 = connect(mapStateToPropsLinks, mapDispatchToProps)(Network);

    return (
      <div>
        <div className='divblock'>
          <AboutFolder text='about' url='./../../../images/icons/folder-icon-pink.png' action={this.props.aboutWindowOpen}/>
          <AboutFolder text='network' url='./../../../images/icons/network-icon.png' action={this.props.linksWindowOpen}/>
        </div>
        <About2 />
        <AboutImage2 />
        <AboutTxt2 />
        <Network2 />
        <Bottombar />
      </div>
    );
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);