/**
 * @file 所有工具函数入口  挂载到全局
 */
import dataJudge from './dataJudge.js';
const globalFn = () => {
    window.$COM = {
        ...dataJudge,
    }
}

export default globalFn;