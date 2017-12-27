import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

import { Bottombar } from './bottombar/Bottombar';
import { Startmenu } from './Startmenu';
import Icon from './../components/icons/Icon';
import About from './windows/About';
import AboutImage from './windows/AboutImage';
import AboutTxt from './windows/AboutTxt';
import Network from './windows/Network';

var mapStateToProps = require("./../functions/mapStateToProps");

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    let About2 = connect(mapStateToProps.aboutWindow, mapDispatchToProps)(About);
    let AboutImage2 = connect(mapStateToProps.aboutImage, mapDispatchToProps)(AboutImage);
    let AboutTxt2 = connect(mapStateToProps.aboutTxt, mapDispatchToProps)(AboutTxt);
    let AboutFolder = connect(mapStateToProps.aboutWindow, mapDispatchToProps)(Icon);
    let Network2 = connect(mapStateToProps.network, mapDispatchToProps)(Network);

    return (
      <div>
        <div className='divblock'>
          <AboutFolder text='about' url='./../../../images/icons/folder-icon-pink.png' action={this.props.aboutWindowOpen}/>
          <AboutFolder text='network' url='./../../../images/icons/network-icon.png' action={this.props.networkWindowOpen}/>
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

export default connect(mapStateToProps.app, mapDispatchToProps)(App);