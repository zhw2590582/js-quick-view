// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_Operator
// 备注：无

// 对它的每个操作数求值（从左到右），并返回最后一个操作数的值

function myFunc() {
  var x = 0;
  return (x += 1), x; // the same of return ++x;
}
