// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator
// 备注：无

// 扩展语法允许一个表达式在期望多个参数（用于函数调用）或多个元素（用于数组字面量）或多个变量（用于解构赋值）的位置扩展
// 剩余操作符的样子看起来和展开操作符一样，但是它是用于解构数组和对象
// 在某种程度上，剩余元素和展开元素相反，展开元素会“展开”数组变成多个元素，剩余元素会收集多个元素和“压缩”成一个单一的元素
// ...rest必须是参数列表的最后一个参数，...spread 无限制!

myFunction(...iterableObj);
const [...iterableObj] = [1, 3, 5, 7, 9];
[...iterableObj, 0, 2, 4, 6, 8];
[0, 2, ...iterableObj, 4, 6, 8];
[...iterableObj, 0, 2, 4, 5, 6, 8, ...iterableObj];
