"use strict";
// ?をつけるとinputがあるかどうかわからない状態にする
const getMemberName = (string) => {
    console.log(string.name);
};
getMemberName({ name: '三苫' });
//割り当ての強制
let memberName;
const addName = (val) => {
    memberName = val;
};
addName('浅野');
console.log(memberName);
//# sourceMappingURL=nonNull.js.map