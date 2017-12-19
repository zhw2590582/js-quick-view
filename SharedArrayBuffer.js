// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
// 备注：无

// SharedArrayBuffer 对象用来表示一个通用的，固定长度的原始二进制数据缓冲区，类似于 ArrayBuffer 对象。
// 但它们可以用来在共享内存上创建视图。与 ArrayBuffer 不同的是，SharedArrayBuffer 不能被分离

// 属性
SharedArrayBuffer.prototype // 表示 SharedArrayBuffer 对象的原型
SharedArrayBuffer.prototype.byteLength // 表示以字节为单位的一个SharedArrayBuffer的长度

// 方法
SharedArrayBuffer.prototype.slice() // 此方法与 Array.prototype.slice() 具有相同的算法