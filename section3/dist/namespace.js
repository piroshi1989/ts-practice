var First;
(function (First) {
    function testFunc() { console.log('First'); }
    First.testFunc = testFunc;
})(First || (First = {}));
var Second;
(function (Second) {
    function testFunc() { console.log('Second'); }
    Second.testFunc = testFunc;
})(Second || (Second = {}));
//namespaceがあれば関数名が同じでもOK。フォルダみたいな扱い
First.testFunc();
Second.testFunc();
//namespace.関数名で書く
//# sourceMappingURL=namespace.js.map