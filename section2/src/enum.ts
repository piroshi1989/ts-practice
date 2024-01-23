//複数の定数を1つにまとめる機能
enum SIZEEnum {
    'Small',
    'Medium',
    'Large'
}

console.log(SIZEEnum.Large)
console.log(SIZEEnum[0])



//トランスパイルすると即時関数になる(function(){})()
//即時関数....ブラウザで表示しようとしたらそのタイミングで実行される
//vueのonMounted()みたいなやつ？

console.log(SIZEEnum[5])
//存在しない配列番号でも書いているときにはエラーにならない
//(console.logではundefinedになる)