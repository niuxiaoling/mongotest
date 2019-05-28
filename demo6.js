// db.workspace.find(
//   {'skill.skillOne': 'html'},
//   {name: true, 'skill.skillTwo': 1, _id: 0}
// )  // 找到技能为html的文件并展示名字，技能2，id不展示

// db.workspace.find(
//   {age: {$lte: 30, $gte: 25}},
//   {name: true, age: true, 'skill.skillOne': true, _id: false}
// )  // 找到年龄小于25大于30的文件并展示名字，技能2，id不展示

// db.workspace.find({age: {$nin: [25, 30]}}, {_id: 0})  // 找到年龄不在25-30之间的,id不展示

// db.workspace.find(
//   {$and: [{age: {$gte: 30}}, {'skill.skillTwo': 'javascript'}]},
//   {_id: 0}
// )  // 找到年龄大于30，且技能二为javascript的


// db.workspace.find({interest:{$size:5}}) // 中括号代码完全匹配

// db.workspace.find({},{name:1,interest:{$slice:2},_id:0}) // 查找所有的数据，只展示兴趣的前2条信息

// db.workspace.find({},{name:true,age:true,_id:false}).limit(2).skip(1).sort({age:1}); // 查询所有的数据，获取每页显示2条，按年龄从小到大排序的名字，年龄
// db.workspace.find({$where:'this.age>30'},{name:true,age:true,_id:false})  // where查询，this指的是workspace集合

