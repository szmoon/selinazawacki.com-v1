function linksWindow(state = {}, action) {
  switch(action.type) {
    case 'LINKS_WINDOW_OPEN' :
      return { ...state, open: true };
    case 'LINKS_WINDOW_CLOSE' :
      return { ...state, open: false };
    default:
      return state;
  }
}

export default linksWindow;