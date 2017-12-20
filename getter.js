// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/get
// 备注：无

// get语法将对象属性绑定到查询该属性时将被调用的函数。

var obj = {
  log: ['example', 'test'],
  get latest() {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1];
  }
};
console.log(obj.latest); // "test".
