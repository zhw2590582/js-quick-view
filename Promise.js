// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
// 备注：无

// 属性
Promise.prototype // 表示 Promise 构造器的原型

// 方法
Promise.all() // 当所有给定的可迭代完成时执行resolve，或者任何 promises失败时执行reject
Promise.prototype.catch() // 返回一个Promise，只处理拒绝的情况
Promise.prototype.then() // 返回一个Promise, 它最多需要有两个参数：Promise 的成功和失败情况的回调函数
Promise.race() // 返回一个 Promise，它将与第一个传递的promise相同的完成方式被完成
Promise.reject() // 返回一个用reason拒绝的Promise
Promise.resolve() // 返回一个promise对象，这个promise对象是被解析后（resolved）的