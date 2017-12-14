// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number
// 备注：无

// 属性
Number.EPSILON // 表示 1 和大于 1 的最小值的差值，浮点数的计算误差小于它，可以认为得到了正确的结果
Number.MAX_SAFE_INTEGER // 在 JavaScript 中最大的安全整数
Number.MAX_VALUE // 在 JavaScript 里所能表示的最大数值
Number.MIN_SAFE_INTEGER // 在 JavaScript中最小的安全的integer型数字
Number.MIN_VALUE // 在 JavaScript 中所能表示的最小的正值
Number.NEGATIVE_INFINITY // 表示负无穷大
Number.NaN // 表示“非数字”
Number.POSITIVE_INFINITY // 表示正无穷大
Number.prototype // 原型对象

// 方法
Number.isFinite() // 检测传入的参数是否是一个有穷数
Number.isInteger() // 用来判断给定的参数是否为整数
Number.isNaN() // 确定传递的值是否为NaN和其类型是Number
Number.isSafeInteger() // 判断传入的参数值是否是一个“安全整数”
Number.parseFloat() // 把一个字符串解析成浮点数
Number.parseInt() // 根据给定的进制数把一个字符串解析成整数
Number.prototype.toExponential() // 以指数表示法返回该数值字符串表示形式
Number.prototype.toFixed() // 使用定点表示法来格式化一个数
Number.prototype.toLocaleString() // 返回这个数字在特定语言环境下的表示字符串
Number.prototype.toPrecision() // 以指定的精度返回该数值对象的字符串表示
Number.prototype.toSource() // 返回该对象源码的字符串表示
Number.prototype.toString() // 返回指定 Number 对象的字符串表示形式
Number.prototype.valueOf() // 返回一个被 Number 对象包装的原始值