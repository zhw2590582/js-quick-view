// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
// 备注：省略了Symbol部分

// 属性
ArrayBuffer.prototype // ArrayBuffer对象的原型
ArrayBuffer.prototype.byteLength // 表示一个ArrayBuffer 对象的字节长度

// 方法
ArrayBuffer.isView() // 当arg是一个ArrayBuffer的视图就返回true
ArrayBuffer.prototype.slice() // 返回一个新的 ArrayBuffer
ArrayBuffer.transfer() // 返回一个新的ArrayBuffer， 其内容取自oldBuffer的数据，并且根据 newByteLength 的大小来对数据进行截取或者以0扩展。
                       // 如果 newByteLength 未定义，则使用 oldBuffer 的byteLength。这个操作使得 oldBuffer 处于被移除的状态
