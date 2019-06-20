import defaultState from './defautState.js';

//确保type和shate的value变量名一致
const reducer  = (state = defaultState, action) => {
    const {type, value} = action;
    const newState = JSON.parse(JSON.stringify(state));  //深拷贝
    newState[type] = value;
    return newState;
}
export default reducer;