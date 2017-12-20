// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters
// 备注：无

// 函数默认参数允许在没有值或undefined被传入时使用默认形参

function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5); // 5
