// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// 备注：无

// 方法
handler.apply() // 用于拦截函数的调用
handler.construct() // 用于拦截new 操作, 必须返回一个对象
handler.defineProperty() // 拦截对对象的 Object.defineProperty() 操作
handler.deleteProperty() // 用于拦截对对象属性的 delete 操作
handler.get() // 用于拦截对象的读取属性操作
handler.getOwnPropertyDescriptor() // 用于拦截Object.getOwnPropertyDescriptor()
handler.getPrototypeOf() // 当读取代理对象的原型时，该方法就会被调用
handler.has() // 可以看作是针对 in 操作的钩子
handler.isExtensible() // 用于拦截对对象的Object.isExtensible()
handler.ownKeys() // 方法用于拦截 Reflect.ownKeys()
handler.preventExtensions()  // 方法用于拦截Object.preventExtensions()
handler.set() // 用于拦截设置属性值的操作
handler.setPrototypeOf() // 用来拦截 Object.setPrototypeOf()