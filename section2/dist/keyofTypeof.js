"use strict";
//enumがonMounted()みたいになるからこのやり方で回避する
const SIZE = {
    SMALL: '小',
    MEDIUM: '中',
    LARGE: '大'
};
//objectの中のkeyだけを型にして作る
//typeof...JSの機能で型を判別 objectならobjectとして表示
//keyof オブジェクトのプロパティ名(key)を型として返す
const sizeCheck = (size) => {
    console.log(size);
};
//# sourceMappingURL=keyofTypeof.js.map