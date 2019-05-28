// 测试一个简单的查询要700多毫秒
var startTime = new Date().getTime() //得到程序运行的开始时间
var db = connect('log') //链接数据库
var rs = db.test
  .find({username: 'p3octakdxkn1u', randNum0: 169770})
  .hint({randNum0: 1, username: 2}) // MongoDB的复合查询是按照我们的索引顺序进行查询,用我们自己指定的索引优先查询，这个方法就是hint()
var runTime = new Date().getTime() - startTime
print('[success] this run time:  ' + runTime + 'ms')
