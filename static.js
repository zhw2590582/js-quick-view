// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/static
// 备注：无

// static 关键字为一个类定义了一个静态方法
// 静态方法调用直接在类上进行，不能在类的实例上调用。静态方法通常用于创建实用程序函数

// 从另一个静态方法
class StaticMethodCall {
  static staticMethod() {
    return 'Static method has been called';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}
StaticMethodCall.staticMethod();
// 'Static method has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method has been called from another static method'

//从类的构造函数和其他方法
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticMethod());
    // 'static method has been called.'
    console.log(this.constructor.staticMethod());
    // 'static method has been called.'
  }
  static staticMethod() {
    return 'static method has been called.';
  }
}


// 一个静态方法在一个类上是如何被实现的。
// 具有一个静态成员的一个类是可以被子类化 。
// 一个静态方法如何能被调用和不能被调用。
class Tripple {
  static tripple(n) {
    n = n || 1;
    return n * 3;
  }
}

class BiggerTripple extends Tripple {
  static tripple(n) {
    return super.tripple(n) * super.tripple(n);
  }
}

console.log(Tripple.tripple());
// 3
console.log(Tripple.tripple(6));
// 18

let tp = new Tripple();

console.log(BiggerTripple.tripple(3));
// 81（不会受父类实例化的影响）

console.log(tp.tripple());
// 'tp.tripple 不是一个函数'.
