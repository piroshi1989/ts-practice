//enumがonMounted()みたいになるからこのやり方で回避する

const SIZE = {
    SMALL: '小',
    MEDIUM: '中',
    LARGE: '大'
}as const

type SizeType = keyof typeof SIZE
//objectの中のkeyだけを型にして作る

//typeof...JSの機能で型を判別 objectならobjectとして表示
//keyof オブジェクトのプロパティ名(key)を型として返す

const sizeCheck = (size: SizeType) => {
    console.log(size)
}
//引数にオリジナルの型を入れる

// sizeCheck('XL')

//定数をまとめて他のものが入ってこないようにする

// valueの型
type ValueOfSize = typeof SIZE[keyof typeof SIZE]