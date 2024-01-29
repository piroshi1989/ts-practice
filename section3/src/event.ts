// const target = document.getElementById('username')
// target.addEventListener('input', (e) => {
// console.log(e)
// console.log(e.target.value)
// })
//このままではe.targetはTSがどのelementか判定できないためエラーになる
// (HTMLInputElementとは限らない)->指定してあげる

// 対策1. instanceof(型のチェック)
// e.target instanceof HTMLInputElement //true

// const target = document.getElementById('username')
// target.addEventListener('input', (e) => {
// console.log(e)
// if(e.target instanceof HTMLInputElement){
//     console.log(e.target.value)
// }
// })


// 対策2.アサーション
// e.target as HTMLInputElement

const target = document.getElementById('username')
target.addEventListener('input', (e) => {
console.log((e.target as HTMLInputElement).value)
})