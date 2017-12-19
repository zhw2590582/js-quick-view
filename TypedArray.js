// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
// 备注：省略了Symbol部分

// 属性
TypedArray.BYTES_PER_ELEMENT // 代表了强类型数组中每个元素所占用的字节数
TypedArray.name // 描述类型数组构造名的字符串值
TypedArray.prototype // 表示TypedArray构造器的原型
TypedArray.prototype.buffer // 表示由TypedArray在构造期间引用的ArrayBuffer
TypedArray.prototype.byteLength // 表示类型化数组的长度（字节数）
TypedArray.prototype.byteOffset // 表示类型化数组距离其ArrayBuffer起始位置的偏移（字节数）
TypedArray.prototype.length // 表示类型化数组的长度（元素数）

// 方法
TypedArray.from() // 算法和Array.from()相同
TypedArray.of() // 算法和Array.from()相同
TypedArray.prototype.copyWithin() // 算法和Array.prototype.copyWithin()相同
TypedArray.prototype.entries() // 算法和Array.prototype.entries()相同
TypedArray.prototype.every() // 算法和Array.prototype.every()相同
TypedArray.prototype.fill() // 算法和Array.prototype.fill()相同
TypedArray.prototype.filter() //算法和Array.prototype.filter()相同
TypedArray.prototype.find() // 算法和Array.prototype.find()相同
TypedArray.prototype.findIndex() // 算法和Array.prototype.findIndex()相同
TypedArray.prototype.forEach() // 算法和Array.prototype.forEach()相同
TypedArray.prototype.includes() // 算法和Array.prototype.includes()相同
TypedArray.prototype.indexOf() // 算法和Array.prototype.indexOf() 相同
TypedArray.prototype.join() // 算法和Array.prototype.join()相同
TypedArray.prototype.keys() // 算法和Array.prototype.keys()相同
TypedArray.prototype.lastIndexOf() // 算法和Array.prototype.lastIndexOf()相同
TypedArray.prototype.map() // 算法和Array.prototype.map()相同
TypedArray.prototype.reduce() // 算法和Array.prototype.reduce()相同
TypedArray.prototype.reduceRight() // 算法和Array.prototype.reduceRight()相同
TypedArray.prototype.reverse() // 算法和Array.prototype.reverse()相同
TypedArray.prototype.set() // 用于从指定数组中读取值，并将其存储在类型化数组中
TypedArray.prototype.slice() // 算法和Array.prototype.slice()相同
TypedArray.prototype.some() // 算法和Array.prototype.some()相同
TypedArray.prototype.sort() // 算法和Array.prototype.sort()相同
TypedArray.prototype.subarray() // ???
TypedArray.prototype.toLocaleString() // 算法和Array.prototype.toLocaleString()相同
TypedArray.prototype.toString() // 算法和Array.prototype.toString()相同
TypedArray.prototype.values() // 算法和Array.prototype.values()相同