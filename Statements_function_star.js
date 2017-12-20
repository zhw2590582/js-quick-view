// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*
// 备注：无

// function* 这种声明方式(function关键字后跟一个星号）会定义一个生成器函数 (generator function)，它返回一个  Generator  对象
// 生成器函数在执行时能暂停，后面又能从暂停处继续执行

function* idMaker() {
  var index = 0;
  while (index < 3) yield index++;
}

var gen = idMaker();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
