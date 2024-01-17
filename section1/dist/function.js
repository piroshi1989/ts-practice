function funcTest(str, int) {
    console.log(`文字は${str}、値は${int}です`);
}
funcTest('あああ', 123);
const arrowFuncTest = (str, int) => {
    console.log(`文字は${str}、値は${int}です`);
};
arrowFuncTest('いいい', 456);
//引数 ? ...    引数intが入ってくるかどうかわからない場合(strは必須,intは省略可能)
// 省略可能は後ろじゃないとだめ
const funcTestQ = (str, int) => {
    console.log(str, int);
};
funcTestQ('Qマーク', 2);
//デフォルトパラメータ デフォルト値があれば省略可能パラメータが前にきてもOK
const funcTestD = (int, str = 'aaa') => {
    console.log(str, int);
};
funcTestD(123);
//可変長パラメータ
const eachNumber = (...items) => {
    for (const item of items) {
        console.log(item);
    }
};
//複数入ってきた引数が1つの配列(items)として扱われ、forで1つずつ実行される
eachNumber(1, 2, 3);
//# sourceMappingURL=function.js.map