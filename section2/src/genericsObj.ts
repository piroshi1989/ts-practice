type GenObject<T,U> = {
    name: string,
    age: number,
    memo:T,
    value:U
}
//memoとvalueは後から型を指定することができる

const soccerMember: GenObject<string, number> = {
    name: '三苫',
    age: 22,
    memo: 'W杯ありがとう',
    value: 123
}

const basketMember: GenObject< number, string> = {
    name: '桜木',
    age: 22,
    memo: 123,
    value: '映画最高'
}

