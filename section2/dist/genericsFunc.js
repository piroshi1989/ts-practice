"use strict";
//一般的な関数
const funcTest = (int) => {
    return int;
};
console.log(funcTest(123));
//ジェネリクスを関数で使う　　仮で型を置き、実際に使うときに型を設定する
const genFunc1 = (arg) => {
    return arg;
};
//arg...引数
console.log(genFunc1(123));
console.log(genFunc1('123'));
//関数を使うときに型を指定できる
//# sourceMappingURL=genericsFunc.js.map