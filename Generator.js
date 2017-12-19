// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator
// 备注：无

// 生成器对象是由一个 generator function 返回的,并且它符合可迭代协议和迭代器协议
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
let g = gen();
g.next(); // { value: 1, done: false }
g.return('foo'); // { value: "foo", done: true }
g.next(); // { value: undefined, done: true }
g.throw(new Error('Something went wrong')); // "Error caught!"

// 方法
Generator.prototype.next() // 回一个包含属性 done 和 value 的对象
Generator.prototype.return() // 返回给定的值并结束生成器
Generator.prototype.throw() // 用来向生成器抛出异常，并恢复生成器的执行，返回带有 done 及 value 两个属性的对象
