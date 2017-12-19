// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction
// 备注：无

// GeneratorFunction构造器生成新的生成器函数 对象。在JavaScript中，生成器函数实际上都是GeneratorFunction的实例对象
// 注意，GeneratorFunction并不是一个全局对象。它可以通过下面的代码获取。
Object.getPrototypeOf(function*() {}).constructor;

var GeneratorFunction = Object.getPrototypeOf(function*() {}).constructor;
var g = new GeneratorFunction('a', 'yield a * 2');
var iterator = g(10);
console.log(iterator.next().value); // 20

// 属性
GeneratorFunction.prototype // GeneratorFunction的原型对象
