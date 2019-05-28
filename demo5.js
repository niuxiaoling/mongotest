var db = connect('log')

// db.workspace.update({sex: 1}, {$set: {money: 1000}}, false, true) // upsert没有不添加,multi：所有的数据都要增加
// === db.workspace.update({sex:1},{$set:{work:'java'}},{upsert:false,multi:true})
// var resultMessage = db.runCommand({getLastError: 1})

// if (resultMessage.updatedExisting === true) {
//   print('修改成功')
// }

var myModify = {
  findAndModify: 'workspace',
  query: {age: 15},
  update: {$set: {name: 'xiaoling'}},
  new: true,
  upsert: true
}
var resultMessage = db.runCommand(myModify)
printjson(resultMessage)
