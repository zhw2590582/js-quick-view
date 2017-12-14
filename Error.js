// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error
// 备注：省略非标准

// 属性
Error.prototype // 代表 Error 的构造器
Error.prototype.message // 有关错误信息，人类易读的（human-readable）描述
Error.prototype.name // 表示error类型的名称.初始值为"Error"

// 方法
Error.prototype.toString() // 返回一个指定的错误对象（Error object）的字符串表示