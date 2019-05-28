var db = connect('log')

// db.workspace.update({name: 'list'}, {$set: {sex: 1, age: 20}}) // 修改指定的键值

// db.workspace.update({name: 'list'}, {$set: {'skill.skillOne': 'englisth'}})  //修改嵌套内容(内嵌文档)

// db.workspace.update({name: 'list'}, {$unset: {age: ''}}) // 删除键值

// db.workspace.update({name: 'list'}, {$inc: {age: -2}}) // $inc对数字计算

// db.workspace.update({}, {$set: {birth: ''}}, {multi: true}) //对所有的数据插入一个健值，true,全部加，false只加一条

// db.workspace.update({name: 'xiaoling'}, {$set:{name:'xiaoling',age: 15, sex: 1}}, {upsert: true}) //upsert也有两个值：true代表没有就添加，false代表没有不添加(默认值)。

// db.workspace.update({},{$set:{interest:[]}},{multi:true})   // 对所有的数据插入兴趣数组


// 数组修饰器

// db.workspace.update({name: 'xiaoling'}, {$push: {interest: 'draw'}})  // 为数组追加一条

// db.workspace.update({name:'xiaoling'},{$push:{"skill.skillOne":'draw'}},{upsert:true}) 

// db.workspace.update({name:'xiaoling',interest:{$ne:'computer'}},{$push:{interest:'computer'}}) // $ne 判断是否存在，存在不执行，不存在执行

// db.workspace.update({name:'xiaoling'},{$addToSet:{interest:'music'}}) // $addToSet 查找是否存在，不存在就push上去

// var interestList = ['sleep','music','computer','code'];
// db.workspace.update({name:'xiaoling'},{$addToSet:{interest:{$each:interestList}}})  //$each批量操作

// db.workspace.update({name:'xiaoling'},{$pop:{interest:-1}}) // $pop 删除数组值,-1从开端删除，1从末端删除

// db.workspace.update({name:'xiaoling'},{$set:{"interest.3":'work'}}) //根据数组的定位修改，interest.int


