

import createLogger from 'redux-logger';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import toDoApp from './modules/toDoApp';


const reducer = combineReducers({
    toDoApp
});

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);
export default (initialState) => createStoreWithMiddleware(reducer, initialState );
