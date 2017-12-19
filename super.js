// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super
// 备注：无

// super关键字用于访问和调用一个对象的父对象上的函数
// super.prop和super[expr]表达式在类和对象字面量任何方法定义中都是有效的

super([arguments]); 
// 调用 父对象/父类 的构造函数

super.functionOnParent([arguments]); 
// 调用 父对象/父类 上的方法