// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function
// 备注：无

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var add1 = async function(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + (await a) + (await b);
};

add1(10).then(v => {
  console.log(v); // prints 60 after 2 seconds.
});

var add2 = async function(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add2(10).then(v => {
  console.log(v); // prints 60 after 4 seconds.
});
