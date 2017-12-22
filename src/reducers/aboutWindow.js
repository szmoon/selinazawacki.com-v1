function aboutWindow(state = {}, action) {
  switch(action.type) {
    case 'ABOUT_OPEN' :
      console.log(state);
      return {
        open: true
      }
    case 'ABOUT_CLOSE' :
      console.log(state);
      return {
        open: false
      }
    default:
      return state;
  }
}

export default aboutWindow;