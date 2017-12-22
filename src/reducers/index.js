import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import aboutWindow from './aboutWindow';
import icons from './icons';

const rootReducer = combineReducers({aboutWindow, icons, routing: routerReducer});

export default rootReducer;