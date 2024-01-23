type MemberTypeR = {
    readonly name: string,
    age: number
}

const memberR: MemberTypeR = {
    name: '三苫',
    age: 22
}

// memberR.name = '流川'
//jsの場合、constでもobjectや配列なら変更できてしまう
//readonlyを追加しているので代入できない

console.log(memberR.name)
