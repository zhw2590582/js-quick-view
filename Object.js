// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object
// 备注：无

// 属性
Object.prototype // 构造函数的原型对象
Object.prototype.__proto__ // Object.prototype 一个简单的访问器属性，其中包含了get（获取）和set（设置）的方法，任何一个__proto__的存取属性都继承于Object.prototype
Object.prototype.constructor // 返回创建实例对象的 Object 构造函数的引用

// 方法
Object.assign() // 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象
Object.create() // 会使用指定的原型对象及其属性去创建一个新的对象
Object.defineProperties() // 直接在一个对象上定义新的属性或修改现有属性，并返回该对象
Object.defineProperty() // 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象
Object.entries() // 返回一个给定对象自身可枚举属性的键值对数组
Object.freeze() // 可以冻结一个对象，该方法返回被冻结的对象
Object.getOwnPropertyDescriptor() // 返回指定对象上一个自有属性对应的属性描述符
Object.getOwnPropertyDescriptors() // 用来获取一个对象的所有自身属性的描述符
Object.getOwnPropertyNames() // 返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组
Object.getOwnPropertySymbols() // 返回一个给定对象自身的所有 Symbol 属性的数组
Object.getPrototypeOf() // 返回指定对象的原型（内部[[Prototype]]属性的值）
Object.is() // 判断两个值是否是相同的值
Object.isExtensible() // 判断一个对象是否是可扩展的
Object.isFrozen() // 判断一个对象是否被冻结
Object.isSealed() // 判断一个对象是否被密封
Object.keys() // 返回一个由一个给定对象的自身可枚举属性组成的数组
Object.preventExtensions() // 让一个对象变的不可扩展，也就是永远不能再添加新的属性
Object.prototype.hasOwnProperty() // 返回一个布尔值，指示对象自身属性中是否具有指定的属性
Object.prototype.isPrototypeOf() // 用于测试一个对象是否存在于另一个对象的原型链上
Object.prototype.propertyIsEnumerable() // 回一个布尔值，表示指定的属性是否可枚举
Object.prototype.toLocaleString() // 返回一个该对象的字符串表示
Object.prototype.toSource() // 返回一个表示对象源代码的字符串
Object.prototype.toString() // 返回一个表示该对象的字符串
Object.prototype.valueOf() // 返回指定对象的原始值
Object.seal() // 可以让一个对象密封，并返回被密封后的对象
Object.setPrototypeOf() // 设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null
Object.values() // 返回一个给定对象自己的所有可枚举属性值的数组
