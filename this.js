// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this
// 备注：无

// 在绝大多数情况下，函数的调用方式决定了this的值。this不能在执行期间被赋值，并且在每次函数被调用时this的值也可能会不同。
// ES5引入了bind方法来设置函数的this值，而不用考虑函数如何被调用的，ES2015 引入了支持this词法解析的箭头函数（它在闭合的执行上下文内设置this的值）