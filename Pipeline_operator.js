// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Pipeline_operator
// 备注：无

// 当把好几个函数调用链起来的时候，管道操作符可以增强代码的可读性。
const double = n => n * 2;
const increment = n => n + 1;

// 没有用管道操作符
double(increment(double(10))); // 42

// 用上管道操作符之后
10 |> double |> increment |> double; // 42
