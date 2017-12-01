// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
// 备注：省略了Symbol部分

// 属性
Array.length // 实例数组长度
Array.prototype // 构造函数的原型对象
Array.from() // 从一个类似数组或可迭代对象中创建一个新的数组实例
Array.isArray() // 用于确定传递的值是否是一个数组
Array.of() // 创建一个具有可变数量参数的新数组实例：Array.of(1, 2, 3) ==> [1, 2, 3]

// 方法
Array.prototype.concat() // 合并并返回新数组
Array.prototype.copyWithin() // 浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小，即数组内的移动覆盖
Array.prototype.entries() // 返回一个新的 Array Iterator 对象
Array.prototype.every() // 测试数组的所有元素是否都通过了指定函数的测试
Array.prototype.fill() // 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素
Array.prototype.filter() // 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
Array.prototype.find() // 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
Array.prototype.findIndex() // 返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1
Array.prototype.forEach() // 对数组的每个元素执行一次提供的函数，除了抛出一个异常，没有办法中止或者跳出循环
Array.prototype.includes() // 用来判断一个数组是否包含一个指定的值，如果是，酌情返回 true 或 false
Array.prototype.indexOf() // 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
Array.prototype.join() // 方法将数组（或一个类数组对象）的所有元素连接到一个字符串中
Array.prototype.keys() // 返回一个新的 Array Iterator 对象，它包含数组中每个索引的键
Array.prototype.lastIndexOf() // 指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1
Array.prototype.map() // 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
Array.prototype.pop() // 从数组中删除最后一个元素，并返回该元素的值，此方法更改数组的长度
Array.prototype.push() // 将一个或多个元素添加到数组的末尾，并返回新数组的长度
Array.prototype.reduce() // 对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值
Array.prototype.reduceRight() // 接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值
Array.prototype.reverse() // 将数组中元素的位置颠倒
Array.prototype.shift() // 从数组中删除第一个元素，并返回该元素的值，此方法更改数组的长度
Array.prototype.slice() // 返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象，原始数组不会被修改
Array.prototype.some() // 测试数组中的某些元素是否通过由提供的函数实现的测试
Array.prototype.sort() // 在适当的位置对数组的元素进行排序，并返回数组
Array.prototype.splice() // 通过删除现有元素和/或添加新元素来更改一个数组的内容
Array.prototype.toLocaleString() // 返回一个字符串表示数组中的元素，数组中的元素将使用各自的 toLocaleString 方法转成字符串
Array.prototype.toSource() // 返回一个字符串,代表该数组的源代码
Array.prototype.toString() // 返回一个字符串，表示指定的数组及其元素
Array.prototype.unshift() // 将一个或多个元素添加到数组的开头，并返回新数组的长度
Array.prototype.values() // 返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值

