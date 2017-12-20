// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor
// 备注：无

// 构造函数 constructor 是用于创建和初始化类中创建的一个对象的一种特殊方法。
//如前所述，如果不指定构造方法，则使用默认构造函数。对于基类，默认构造函数是：
constructor() {}

//对于派生类，默认构造函数是：
constructor(...args) {
  super(...args);
}