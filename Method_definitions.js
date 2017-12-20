// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Method_definitions
// 备注：无

// 在对象初始器中引入了一种更简短定义方法的语法，这是一种把方法名直接赋给函数的简写方式

var obj = {
  property( parameters… ) {},
  *generator( parameters… ) {},
  async property( parameters… ) {},
  async* generator( parameters… ) {},

  // with computed keys:
  [property]( parameters… ) {},
  *[generator]( parameters… ) {},
  async [property]( parameters… ) {},

  // compare getter/setter syntax:
  get property() {},
  set property(value) {}
};