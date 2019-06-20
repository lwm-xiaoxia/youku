/**
 * @file redux入口文件
 */
import {createStore} from 'redux';
import reducer from './reducer.js';
import globalActionCreators from './actionCreators';
import globalActionTypes from './actionTypes';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//store各个挂在全局
const globalStore = () => {
    window.$store = store;
    globalActionTypes();
    globalActionCreators();
}

export default globalStore;