//仮置きの文字例
//T...type, K...keyof, U...unknown, E...Element

//型の制約  extends以降のnumberもしくはstringのどちらかで制約
type GenObjectE<T extends number | string> = {
    sample: T
}

const testObjE : GenObjectE<string> = {
    sample : 'あああ'
}

//デフォルトの型を指定すると、あとで利用するときに型指定しなくてもいい
type GenObjectD<T = string> = {
    sample: T
}

const testObjD: GenObjectD = {
    sample: '123'
}