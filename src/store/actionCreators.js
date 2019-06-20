/**
 * @file 统一管理各个创建的action
 */
const actionCreators = {
    isChannelAction: value => ({type: window.$actionT['IS_CHANNEL'], value}),
    getHistoryAction: value => ({type: window.$actionT['GET_HISTORY'], value}),
};

//把actionCreators挂在全局
const globalActionCreators = () => window.$actionFn = actionCreators;

export default globalActionCreators;