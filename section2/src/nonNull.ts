type Member = {name: string}

// ?をつけるとinputがあるかどうかわからない状態にする
const getMemberName = (string?: Member) => {
    console.log(string!.name)
};

getMemberName({ name: '三苫'});

//割り当ての強制
let memberName!: string

const addName = (val: string) => {
    memberName = val
}
addName('浅野')

console.log(memberName)