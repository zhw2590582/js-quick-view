// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
// 备注：省略了Symbol部分和废弃的部分

// 属性
String.prototype // 原型对象
string.length // 字符串长度

// 方法
String.fromCharCode() // 使用指定的Unicode值序列创建的字符串
String.fromCodePoint() // 使用指定的代码点序列创建的字符串
String.prototype.charAt() // 从一个字符串中返回指定的字符
String.prototype.charCodeAt() // 返回0到65535之间的整数
String.prototype.codePointAt() // 返回一个Unicode编码点值的非负整数
String.prototype.concat() // 将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回
String.prototype.endsWith() // 判断当前字符串是否是以另外一个给定的子字符串“结尾”的
String.prototype.includes() // 判断一个字符串是否包含在另一个字符串中
String.prototype.indexOf() // 第一次出现的指定值的索引
String.prototype.lastIndexOf() // 返回指定值在调用该方法的字符串中最后出现的位置
String.prototype.localeCompare() // 返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同
String.prototype.match() // 当一个字符串与一个正则表达式匹配时， match()方法检索匹配项
String.prototype.normalize() // 按照指定的一种Unicode正规形式将当前字符串正规化
String.prototype.padEnd() // 用一个字符串填充当前字符串
String.prototype.padStart() // 用一个字符串填充当前字符串
String.prototype.repeat() // 返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本
String.prototype.replace() // 返回一个由替换值替换一些或所有匹配的模式后的新字符串
String.prototype.search() // 执行正则表达式和 String对象之间的一个搜索匹配
String.prototype.slice() // 提取一个字符串的一部分，并返回一新的字符串
String.prototype.split() // 使用指定的分隔符字符串将一个String对象分割成字符串数组
String.prototype.startsWith() // 判断当前字符串是否是以另外一个给定的子字符串“开头”的
String.prototype.substr() // 返回一个字符串中从指定位置开始到指定字符数的字符
String.prototype.substring() // 返回一个字符串在开始索引到结束索引之间的一个子集
String.prototype.toLocaleLowerCase() // 根据任何特定于语言环境的案例映射，返回调用字符串值转换为小写的值
String.prototype.toLocaleUpperCase() // 使用本地化（locale-specific）的大小写映射规则将输入的字符串转化成大写形式并返回结果字符串
String.prototype.toLowerCase() // 将调用该方法的字符串值转为小写形式，并返回
String.prototype.toString() // 返回指定对象的字符串形式
String.prototype.toUpperCase() // 将调用该方法的字符串值转换为大写形式，并返回
String.prototype.trim() // 从一个字符串的两端删除空白字符
String.prototype.trimLeft() // 从一个字符串的左端移除空白字符
String.prototype.trimRight() // 从一个字符串的右端移除空白字符
String.prototype.valueOf() // 方法返回一个String对象的原始值
String.raw() // 一个模板字符串的标签函数