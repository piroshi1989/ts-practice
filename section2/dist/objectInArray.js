"use strict";
//keyはstringなのでまとめて宣言する書き方
const members = [
    {
        id: 1,
        name: '浅野',
        hobby: 'サッカー'
    }, {
        id: 2,
        name: '伊藤',
        hobby: 'サッカー'
    }
];
const lists = [
    {
        id: 1,
        name: 'パンダ',
        hobby: 'サッカー'
    }, {
        id: 2,
        name: 'ライオン',
        hobby: 'サッカー'
    }
];
for (const member of members) {
    console.log(`${member.id}, ${member.name}`);
}
for (const list of lists) {
    console.log(`${list.id}, ${list.name}`);
}
//# sourceMappingURL=objectInArray.js.map