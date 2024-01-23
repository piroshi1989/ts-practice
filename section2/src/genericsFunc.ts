//一般的な関数
const funcTest = (int: number):number => {
    return int
}

console.log(funcTest(123))

//ジェネリクスを関数で使う　　仮で型を置き、実際に使うときに型を設定する
const genFunc1 = <T>(arg: T) :T => {
    return arg
}
//arg...引数

console.log(genFunc1<number>(123))
console.log(genFunc1<string>('123'))
//関数を使うときに型を指定できる