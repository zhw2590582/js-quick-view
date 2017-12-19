// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView
// 备注：需要重新学习

// 属性
DataView.prototype // DataView的原型
DataView.prototype.buffer // 描述了在构造时被 DataView 引用的 ArrayBuffer
DataView.prototype.byteLength // 描述了视图从它的 ArrayBuffer 开始的字节长度
DataView.prototype.byteOffset // 描述了从 ArrayBuffer 开始的字节偏移量

// 方法
DataView.prototype.getFloat32() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个32-bit数(浮点型)
DataView.prototype.getFloat64() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个64-bit数(双精度浮点型)
DataView.prototype.getInt16() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个16-bit数(短整型)
DataView.prototype.getInt32() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个32-bit数(长整型)
DataView.prototype.getInt8() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个有符号的8-bit整数(一个字节)
DataView.prototype.getUint16() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个16-bit数(无符号短整型)
DataView.prototype.getUint32() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个32-bit数(无符号长整型)
DataView.prototype.getUint8() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个无符号的8-bit整数(一个字节)
DataView.prototype.setFloat32() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个32-bit数(浮点型)
DataView.prototype.setFloat64() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个64-bit数(双精度浮点型)
DataView.prototype.setInt16() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个16-bit数(短整型)
DataView.prototype.setInt32() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个32-bit数(长整型)
DataView.prototype.setInt8() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个8-bit数(一个字节)
DataView.prototype.setUint16() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个16-bit数(无符号短整型)
DataView.prototype.setUint32() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个32-bit数(无符号长整型)
DataView.prototype.setUint8() // 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处储存一个8-bit数(无符号字节)
