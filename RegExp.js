// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// 备注：省略非标准和Symbol部分

// 属性
RegExp.prototype // 构造函数的原型对象
RegExp.prototype.flags // 返回一个字符串，由当前正则表达式对象的标志组成
RegExp.prototype.global // 表明正则表达式是否使用了 "g" 标志
RegExp.prototype.ignoreCase // 表明正则表达式是否使用了 "i" 标志
RegExp.prototype.multiline // 表明正则表达式是否使用了 "m" 标志
RegExp.prototype.source // 返回一个值为当前正则表达式对象的模式文本的字符串
RegExp.prototype.sticky // 反映了搜索是否具有粘性
RegExp.prototype.unicode // 表明正则表达式带有"u" 标志
RegExp.lastIndex // 正则表达式的一个可读可写的整型属性，用来指定下一次匹配的起始索引

// 方法
RegExp.prototype.exec() // 在一个指定字符串中执行一个搜索匹配, 返回一个结果数组或 null
RegExp.prototype.test() // 用来查看正则表达式与指定的字符串是否匹配
RegExp.prototype.toString() // 返回一个表示该正则表达式的字符串