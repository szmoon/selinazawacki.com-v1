import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import candaceView from './candaceView';
import aboutWindow from './aboutWindow';


const rootReducer = combineReducers({aboutWindow, candaceView, routing: routerReducer});

export default rootReducer;