// const input = document.getElementById('username')
// input.placeholder = '山田太郎'
// これではHTMLElementの型であることはTSは判断できるけど、
// その中にinput型はないのでエラーになる
//対策1.型をアサーションで指定
// const input = document.getElementById('username') as HTMLInputElement
// input.placeholder = '山田太郎'
//対策2.genericsを使用
const input = document.getElementById('username');
input.placeholder = '山田太郎';
//HTMLInputElementとかはあらかじめ設定されているのでslideのurlを参照する
//# sourceMappingURL=htmlElement.js.map