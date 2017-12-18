// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
// 备注：无

// 方法
handler.apply() // 通过指定的参数列表发起对目标(target)函数的调用
handler.construct() // 行为有点像 new 操作符 构造函数 ， 相当于运行 new target(...args)
handler.defineProperty() // 基本等同于 Object.defineProperty() 方法，唯一不同是返回 Boolean 值
handler.deleteProperty() // 允许用于删除属性。它很像 delete operator ，但它是一个函数
handler.get() // 就像从 object (target[propertyKey]) 中获取属性，但它是作为一个函数执行的
handler.getOwnPropertyDescriptor() // 与 Object.getOwnPropertyDescriptor() 方法相似
handler.getPrototypeOf() // 与 Object.getPrototypeOf() 方法是一样的
handler.has() // 作用与 in 操作符 相同
handler.isExtensible() // 判断一个对象是否可扩展
handler.ownKeys() // 返回一个由目标对象自身的属性键组成的数组
handler.preventExtensions()  // 阻止新属性添加到对象
handler.set() // 像在一个对象上设置一个属性
handler.setPrototypeOf() //  Object.setPrototypeOf() 方法是一致的