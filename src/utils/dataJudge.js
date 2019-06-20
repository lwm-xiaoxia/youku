/**
 * @file 判断数据类型工具函数
 */

 //判断是否是节点对象
//  const isNode = node => {
//     if(node) {
//         const constructorName = node.constructor.name;
//         return constructorName === 'HTMLHeadingElement';
//     }
//     return false;
//  }
 //判断是否是节点对象
const isEl = el => {
    if(el && el.nodeType === 1){
        return true;    
    }
    return false;  
}

const dataJudge = {
    isEl,
};
export default dataJudge;