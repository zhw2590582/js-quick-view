// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield
// 备注：无

// yield 关键字用来暂停和恢复一个生成器函数

function* countAppleSales() {
    var saleList = [3, 7, 5];
    for (var i = 0; i < saleList.length; i++) {
        yield saleList[i];
    }
}

var appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }