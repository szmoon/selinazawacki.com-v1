export function mapStateToProps(state) {
  return {
    // aboutWindow: state.aboutWindow,
    // networkWindow: state.networkWindow
  }
}

function AboutWindow(state) {
  return {
    aboutWindow: state.aboutWindow
  }
}

function mapStateToPropsAboutTxt(state) {
  return {
    aboutTxt: state.aboutTxt
  }
}

function mapStateToPropsAboutImage(state) {
  return {
    aboutImage: state.aboutImage
  }
}

function mapStateToPropsLinks(state) {
  return {
    networkWindow: state.networkWindow
  }
}