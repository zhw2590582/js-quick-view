// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
// 备注：省略了Symbol部分，比较复杂，未翻译完成

// 属性
Date.prototype // 表示 Date 构造函数的原型

// 方法
Date.UTC() // 接受的参数同日期构造函数接受最多参数时一样，返回从1970-1-1 00:00:00 UTC到指定日期的的毫秒数
Date.now() // 返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数
Date.parse() // 解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数
Date.prototype.getDate() // 返回一个指定的日期对象为一个月中的第几天
Date.prototype.getDay() // 根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天
Date.prototype.getFullYear() // 根据本地时间返回指定日期的年份
Date.prototype.getHours() // 根据本地时间，返回一个指定的日期对象的小时
Date.prototype.getMilliseconds() // 根据本地时间，返回一个指定的日期对象的毫秒数
Date.prototype.getMinutes() // 根据本地时间，返回一个指定的日期对象的分钟数
Date.prototype.getMonth() // 根据本地时间，返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月）
Date.prototype.getSeconds() // 根据本地时间，返回一个指定的日期对象的秒数
Date.prototype.getTime() // 返回一个时间的格林威治时间数值
Date.prototype.getTimezoneOffset() // 返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟
Date.prototype.getUTCDate() // 以世界时为标准，返回一个指定的日期对象为一个月中的第几天
Date.prototype.getUTCDay() // 以世界时为标准，返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天
Date.prototype.getUTCFullYear() // 以世界时为标准，返回一个指定的日期对象的年份
Date.prototype.getUTCHours() // 以世界时为标准，返回一个指定的日期对象的小时数
Date.prototype.getUTCMilliseconds() // 以世界时为标准，返回一个指定的日期对象的毫秒数
Date.prototype.getUTCMinutes() // 以世界时为标准，返回一个指定的日期对象的分钟数
Date.prototype.getUTCMonth() // 以世界时为标准，返回一个指定的日期对象的月份，它是从 0 开始计数的（0 代表一年的第一个月）
Date.prototype.getUTCSeconds() // 以世界时为标准，返回一个指定的日期对象的秒数
Date.prototype.getYear() // 返回指定的本地日期的年份
Date.prototype.setDate() // 根据本地时间来指定一个日期对象的天数
Date.prototype.setFullYear() // 根据本地时间为一个日期对象设置年份
Date.prototype.setHours() // 根据本地时间为一个日期对象设置小时数
Date.prototype.setMilliseconds() // 会根据本地时间设置一个日期对象的豪秒数
Date.prototype.setMinutes() // 根据本地时间为一个日期对象设置分钟数
Date.prototype.setMonth() // 根据本地时间为一个设置年份的日期对象设置月份
Date.prototype.setSeconds() // 根据本地时间设置一个日期对象的秒数
Date.prototype.setTime() // 以一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间
Date.prototype.setUTCDate() // 根据全球时间设置特定date对象的日期
Date.prototype.setUTCFullYear() // 根据世界标准时间为一个具体日期设置年份
Date.prototype.setUTCHours() // 根据世界标准时间为一个具体日期设置小时数
Date.prototype.setUTCMilliseconds() // 根据世界时来设置指定时间的毫秒数
Date.prototype.setUTCMinutes() // 根据世界时来设置指定时间的分钟数
Date.prototype.setUTCMonth() // 根据世界时来设置指定时间的月份
Date.prototype.setUTCSeconds() // 根据世界时来设置指定时间的秒数
Date.prototype.setYear() 
Date.prototype.toDateString()
Date.prototype.toGMTString()
Date.prototype.toISOString()
Date.prototype.toJSON()
Date.prototype.toLocaleDateString()
Date.prototype.toLocaleFormat()
Date.prototype.toLocaleString()
Date.prototype.toLocaleTimeString()
Date.prototype.toSource()
Date.prototype.toString()
Date.prototype.toTimeString()
Date.prototype.toUTCString()
Date.prototype.valueOf()