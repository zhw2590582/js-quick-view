// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/class
// 备注：无

// class 声明创建一个基于原型继承的具有给定名称的新类

class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}
