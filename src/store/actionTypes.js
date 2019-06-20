/**
 * @file 大写变量存储actionType,便于发现type写错
 */

 const actionTypes = {
    IS_CHANNEL: 'isChannel',
    GET_HISTORY: 'getHistory',
 };

 //把actionTypes挂到全局
const globalActionTypes = () => window.$actionT = actionTypes;

export default globalActionTypes;