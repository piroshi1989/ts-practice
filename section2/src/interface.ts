interface MemberInterface {
    name: string,
    age: number
}

const memberI: MemberInterface = {
    name: '前田',
    age: 25
}

interface HobbyInterface {
    hobby: string
}

interface ProfileInterface extends MemberInterface, HobbyInterface {}

const memberInfoI: ProfileInterface = {
    name:'山田',
    age: 23,
    hobby:'サッカー'
}

console.log(memberInfoI.age)