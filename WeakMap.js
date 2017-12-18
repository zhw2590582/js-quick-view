// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
// 备注：省略了非标准部分

// 属性
WeakMap.prototype  // 构造函数的原型对象

// 方法
WeakMap.prototype.delete() // 移除key的关联对象
WeakMap.prototype.get() // 返回key关联对象, 或者 undefined(没有key关联对象时)
WeakMap.prototype.has() // 根据是否有key关联对象返回一个Boolean值
WeakMap.prototype.set() // 在WeakMap中设置一组key关联对象，返回这个 WeakMap对象