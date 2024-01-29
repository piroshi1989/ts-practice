import User from './moduleExportD'
//defaultでは{}は不要

import {UserType, BlogType as Blog} from './moduleExport'
//asは元の型名がわからなくなるので極力使用しない
//この書き方は分割代入

const user: UserType = {
    id: 1,
    name: '柴崎'
}
console.log(user.name)

const user2: User = {
    id: 2,
    name: '山田'
}
console.log(user2.name)

const blog: Blog = {
    id: 3,
    name: 'テスト投稿'
}
console.log(blog.name)