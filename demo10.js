// db.info.insert({
//   contextInfo:
//     'I am a programmer, I love life, love family. Every day after work, I write a diary.'
// })
// db.info.insert({
//   contextInfo:
//     'I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink.'
// })

// var rs = db.info.find({$text: {$search: 'PlayGame'}})  // 全文索引
// var rs = db.info.find({$text: {$search: 'programmer family diary drink'}}) // 查找多个词
// var rs = db.info.find({$text: {$search: 'programmer family diary -drink'}})  // 不希望找到的
// var rs = db.info.find({$text: {$search: '"love PlayGame" drink'}}) // 转义
// rs.forEach(rs => printjson(rs))

db.createUser({
  user: 'niuxiaoling', // 用户名
  pwd: 'admin', // 密码
  customData: {
    // 备注信息
    name: '小玲',
    email: '17607190392@163.com',
    age: 18
  },
  roles: [
    {
      role: 'readWrite',
      db: 'admin'
    }
  ]
})
