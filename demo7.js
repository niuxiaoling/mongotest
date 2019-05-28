var db = connect('log') // 链接集合log

// var result = db.workspace.find({interest: {$size: 5}}) // 声明result,把查询结果赋值给result
//利用游标的hasNext()进行循环输出结果。
// while (result.hasNext()) {
//   printjson(result.next())
// }
// 利用循环
// result.forEach(element => {
//   printjson(element)
// })
