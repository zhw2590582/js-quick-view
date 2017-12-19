// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await
// 备注：无

// await 操作符用于等待一个Promise 对象。它只能在异步函数 async function 中使用

// 如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();

// 如果该值不是一个 Promise，await 会把该值转换为已正常处理的Promise，然后等待其处理结果。
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();

// 如果 Promise 处理异常，则异常值被抛出。
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();
