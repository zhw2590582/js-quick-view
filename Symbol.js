// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol
// 备注：省略非标准

// 属性
Symbol.hasInstance // 用于判断某对象是否为某构造器的实例，因此你可以用它自定义 instanceof 操作符在某个类上的行为
Symbol.isConcatSpreadable // 用于配置某对象作为Array.prototype.concat()方法的参数时是否展开其数组元素
Symbol.iterator // 每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环使用，一些内置类型拥有默认的迭代器行为
Symbol.match // 指定了匹配的是正则表达式而不是字符串。String.prototype.match() 方法会调用此函数，此函数还用于标识对象是否具有正则表达式的行为
Symbol.prototype // Symbol 构造函数的原型
Symbol.replace // 指定了当一个字符串替换所匹配字符串时所调用的方法。String.prototype.replace() 方法会调用此方法
Symbol.search // 指定了一个搜索方法，这个方法接受用户输入的正则表达式，返回该正则表达式在字符串中匹配到的下标，这个方法由以下的方法来调用 String.prototype.search()
Symbol.species // 指定一个构造函数创建派生对象的函数值属性，允许子类覆盖对象的默认构造函数
Symbol.split // 指向 一个正则表达式的索引处分割字符串的方法。 这个方法通过 String.prototype.split() 调用
Symbol.toPrimitive // 指将被调用的指定函数值的属性转换为相对应的原始值
Symbol.toStringTag // 通常作为对象的属性键使用，对应的属性值应该为字符串类型，这个字符串用来表示该对象的自定义类型标签
Symbol.unscopables // 指用于指定对象值，其对象自身和继承的从关联对象的 with 环境绑定中排除的属性名称

// 方法
Symbol.for() // 和 Symbol() 不同的是，用 Symbol.for() 方法创建的的 symbol 会被放入一个全局 symbol 注册表中
             // 返回由给定的 key 找到的 symbol，否则就是返回新创建的 symbol
Symbol.keyFor() // 用来获取 symbol 注册表中与某个 symbol 关联的键
Symbol.prototype.toString() // 返回当前 symbol 对象的字符串表示
Symbol.prototype.valueOf() // 返回当前 symbol 对象所包含的 symbol 原始值