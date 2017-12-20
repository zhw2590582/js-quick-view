// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/default
// 备注：无

// default 关键字可以在 JavaScript 的两种情况下使用：在 switch ，或 export 中

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

// module "my-module.js"
let cube = function cube(x) {
  return x * x * x;
};
export default cube;

// module "my-module.js"
import myFunction from 'my-module';
console.log(myFunction(3)); // 27
