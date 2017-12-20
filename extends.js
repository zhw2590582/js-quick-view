// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/extends
// 备注：无

// extends关键字用来创建一个普通类或者内建对象的子类
// 继承的.prototype必须是一个Object 或者 null。

class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }
}
