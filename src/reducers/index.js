import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import aboutWindow from './aboutWindow';
import linksWindow from './linksWindow';
import icons from './icons';

const rootReducer = combineReducers({aboutWindow, linksWindow, icons, routing: routerReducer});

export default rootReducer;