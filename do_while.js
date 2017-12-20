// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/do...while
// 备注：无

// do...while 语句创建一个执行指定语句的循环，直到condition值为 false。在执行statement 后检测condition，所以指定的statement至少执行一次

var result = '';
var i = 0;
do {
  i += 1;
  result += i + ' ';
} while (i < 5);
document.getElementById('example').innerHTML = result;
