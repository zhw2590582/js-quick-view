// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map
// 备注：省略了Symbol部分

// 属性
Map.prototype // 构造函数的原型对象
Map.prototype.size // 对象的元素数量

// 方法
Map.prototype.clear() // 移除Map对象中的所有元素
Map.prototype.delete() // 移除 Map 对象中指定的元素
Map.prototype.entries() // 返回一个新的包含 [key, value]对的 Iterator 对象
Map.prototype.forEach() // 以插入顺序对 Map 对象中的每一个键值对执行一次参数中提供的回调函数
Map.prototype.get() // 获取一个Map对象中指定的元素
Map.prototype.has() // 用来表明Map中是否存在指定元素
Map.prototype.keys() // 返回一个新的 Iterator 对象。它包含按照顺序插入Map对象中每个元素的key值
Map.prototype.set() // 为Map对象添加一个指定键（key）和值（value）的新元素
Map.prototype.values() // 返回一个新的Iterator对象。它包含按顺序插入Map对象中每个元素的value值