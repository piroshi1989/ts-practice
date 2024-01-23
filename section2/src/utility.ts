type User = {
    id: number,
    name: string,
    age: number,
    hobby: string
}

// user型からPickでname,ageを抜き出し、新たな型にする
type UserNameAndAge = Pick<User, 'name' | 'age'>

//partialで?をつける。新しい型であってもなくてもいい
type UserPartialType = Partial<User>