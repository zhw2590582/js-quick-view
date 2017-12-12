// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function
// 备注：无

// 属性
Function.arguments // 以数组形式获取传入函数的所有参数
Function.caller // 获取调用函数的具体对象
Function.length // 获取函数的接收参数个数
Function.name // 获取函数的名称
Function.displayName // 获取函数的display name
Function.prototype.constructor // 声明函数的原型构造方法

// 方法
Function.prototype.apply() // 在一个对象的上下文中应用另一个对象的方法；参数能够以数组形式传入
Function.prototype.bind() // 创建一个新函数,称为绑定函数
Function.prototype.call() // 在一个对象的上下文中应用另一个对象的方法；参数能够以列表形式传入
Function.prototype.isGenerator() // 若函数对象为generator，返回true，反之返回 false
Function.prototype.toSource() // 获取函数的实现源码的字符串。 覆盖了 Object.prototype.toSource 方法
Function.prototype.toString() // 获取函数的实现源码的字符串。覆盖了 Object.prototype.toString 方法