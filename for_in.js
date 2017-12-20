// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in
// 备注：无

// for...in语句以任意顺序遍历一个对象的可枚举属性。对于每个不同的属性，语句都会被执行
// for...in不应该用于迭代一个 Array，其中索引顺序很重要
// 如果你只要考虑对象本身的属性，而不是它的原型，那么使用 getOwnPropertyNames() 或执行 hasOwnProperty() 来确定某属性是否是对象本身的属性（也能使用propertyIsEnumerable）

var obj = { a: 1, b: 2, c: 3 };

for (var prop in obj) {
  console.log('obj.' + prop + ' = ' + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

var triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Output:
// "obj.color = red"
