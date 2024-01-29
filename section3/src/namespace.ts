namespace First {
    export function testFunc(){console.log('First')}
}

namespace Second {
    export function testFunc(){console.log('Second')}
}
//namespaceがあれば関数名が同じでもOK。フォルダみたいな扱い

First.testFunc()
Second.testFunc()
//namespace.関数名で書く