function aboutWindow(state = {}, action) {
  switch(action.type) {
    case 'ABOUT_OPEN' :
      return {
        open: true
      }
    case 'ABOUT_CLOSE' :
      return {
        open: false
      }
    default:
      return state;
  }
}

export default aboutWindow;