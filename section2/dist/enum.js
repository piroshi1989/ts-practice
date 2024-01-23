"use strict";
//複数の定数を1つにまとめる機能
var SIZEEnum;
(function (SIZEEnum) {
    SIZEEnum[SIZEEnum["Small"] = 0] = "Small";
    SIZEEnum[SIZEEnum["Medium"] = 1] = "Medium";
    SIZEEnum[SIZEEnum["Large"] = 2] = "Large";
})(SIZEEnum || (SIZEEnum = {}));
console.log(SIZEEnum.Large);
console.log(SIZEEnum[0]);
//トランスパイルすると即時関数になる(function(){})()
//即時関数....ブラウザで表示しようとしたらそのタイミングで実行される
//vueのonMounted()みたいなやつ？
console.log(SIZEEnum[5]);
//存在しない配列番号でも書いているときにはエラーにならない
//(console.logではundefinedになる)
//# sourceMappingURL=enum.js.map