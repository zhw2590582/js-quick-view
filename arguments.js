// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments
// 备注：无

// arguments 是一个对应于传递给函数的参数的类数组对象
// 使用 arguments.length来确定传递给函数参数的个数，然后使用arguments对象来处理每个参数。要确定函数签名中参数的数量，请使用Function.length属性
// 您还可以使用Array.from()方法或扩展运算符将参数转换为真实数组
// arguments.callee 指向当前执行的函数
// arguments对象可以与剩余参数、默认参数和解构赋值参数结合使用

function foo(...args) {
  return args;
}
foo(1, 2, 3); // [1,2,3]
