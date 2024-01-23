type MemberType = {
    name: string,
    age: number
}

const memberT: MemberType = {
    name: '三苫',
    age: 22
}

type MemberHobby = {
    hobby: string
}

type MemberProfile = MemberType & MemberHobby

const memberInfo: MemberProfile = {
    name:'青木',
    age:25,
    hobby: 'サッカー'
}

console.log(memberInfo.hobby)