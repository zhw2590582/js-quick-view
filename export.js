// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export
// 备注：无

// export语句用于在创建JavaScript模块时，从模块中导出函数、对象或原始值，以便其他程序可以通过 import 语句使用它们

export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;