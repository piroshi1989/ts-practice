type ObjectInArray1 = {
    id: number,
    name: string,
    hobby: string
}[]
//配列の中にオブジェクトがある場合の型宣言

type ObjectInArray2 = {
    [key: string]: string | number
}[]
//keyはstringなのでまとめて宣言する書き方

const members: ObjectInArray1 = [
    {
        id: 1,
        name: '浅野',
        hobby: 'サッカー'
    },{
        id: 2,
        name: '伊藤',
        hobby:'サッカー'
    }
]

const lists: ObjectInArray2 = [
    {
        id: 1,
        name: 'パンダ',
        hobby: 'サッカー'
    },{
        id: 2,
        name: 'ライオン',
        hobby:'サッカー'
    }
]

for(const member of members){
    console.log(`${member.id}, ${member.name}`)
}

for(const list of lists){
    console.log(`${list.id}, ${list.name}`)
}