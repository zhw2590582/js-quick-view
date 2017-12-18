// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
// 备注：省略了Symbol部分

// 属性
Set.prototype // 构造函数的原型对象
Set.prototype.size // 对象的元素数量

// 方法
Set.prototype.add() // 向一个 Set 对象的末尾添加一个指定的值
Set.prototype.clear() // 用来清空一个 Set 对象中的所有元素
Set.prototype.delete() // 可以从一个 Set 对象中删除指定的元素
Set.prototype.entries() // 方法返回一个新的迭代器对象 ，这个对象的元素是类似 [value, value] 形式的数组
Set.prototype.forEach() // 根据集合中元素的顺序，对每个元素都执行提供的 callback 函数一次
Set.prototype.has() // 返回一个布尔值来指示对应的值value是否存在Set对象中
Set.prototype.values() // 返回一个 Iterator  对象，这个对象以插入Set 对象的顺序包含了原 Set 对象里的每个元素