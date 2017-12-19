// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target
// 备注：无

// new.target属性允许你检测函数或构造方法是否是通过new运算符被调用的。
// 在通过new运算符被初始化的函数或构造方法中，new.target返回一个指向构造方法或函数的引用
// 在普通的函数调用中，new.target 的值是undefined

function Foo() {
  if (!new.target) throw 'Foo() must be called with new';
  console.log('Foo instantiated with new');
}

Foo(); // throws "Foo() must be called with new"
new Foo(); // logs "Foo instantiated with new"
