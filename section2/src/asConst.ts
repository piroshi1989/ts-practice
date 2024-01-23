const memberAC = {
    name: 'ああああ',
    age: 25
} as const
//全部のプロパティにreadonlyをかける場合はas constを追記

const arrayAC = ['あああ', 'いいい'] as const

// arrayAC.push('ううう')
//as constでreadonlyになっているのでpushできない