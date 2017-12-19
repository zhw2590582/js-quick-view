// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined
// 备注：全局属性undefined表示原始值undefined。它是一个JavaScript的 原始数据类型

if(typeof x === 'undefined') { // 没有错误，执行结果为true
    // 执行这些语句
}

if(x === undefined) { // 抛出一个错误，ReferenceError

}

var x;
if(x === void 0) {
    // 执行这些语句
}

// 没有声明y
if(y === void 0) {
    // 抛出一个RenferenceError错误(与`typeof`相比)
}