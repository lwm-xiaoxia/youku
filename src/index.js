/**
 * @file 该应用的入口主文件
 * @author lwm
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './style.css';
import App from './App';
import globalStore from './store/index';
import globalFn from './utils/index';

globalStore();  //把store各个都挂载到全局
globalFn();  //工具函数挂在全局

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)
console.log('新分支');   