// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters
// 备注：无

// 剩余参数语法允许我们将一个不定数量的参数表示为一个数组

// Before rest parameters, the following could be found:
function f(a, b) {
  var args = Array.prototype.slice.call(arguments, f.length);
}

// to be equivalent of
function f(a, b, ...args) {}
