// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/set
// 备注：无

// 当尝试设置属性时，set语法将对象属性绑定到要调用的函数。

var language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
};

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']
