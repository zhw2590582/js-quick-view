// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
// 备注：无

// AsyncFunction 构造函数 创建一个新的  async function 对象。在JavaScript中，每个异步函数实际上都是一个 AsyncFunction  对象
// 请注意，AsyncFunction不是一个全局对象。可以通过运行以下代码获得
Object.getPrototypeOf(async function(){}).constructor

// 属性
AsyncFunction.prototype // AsyncFunction 的原型对象


