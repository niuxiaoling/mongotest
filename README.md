###  官网下载
选择server =>  MongoDB Community  Server(商业版) => 选择64位的下载

安装一路回车，我这里安装到了C:\Program Files\MongoDB\Server\4.0\bin

配置环境变量  

### 运行MongoDB服务端
启动服务端，启动服务的命令的文件是：mongod.exe

- 1.打开命令行(win+R),输入mongod
- 2.会发现服务并没有启动，报exception(异常)
- 3.可以在c盘新建data\db文件夹，或者需要新建db文件夹作为数据库存放路径,在`C:\Program Files\MongoDB`下新建一个db文件夹，win+R，输入cmd，然后用cd命令进入`C:\Program Files\MongoDB`:\bin目录下，执行如下命令：
 `C:\Program Files\MongoDB\bin>mongod.exe --dbpath C:\Program Files\MongoDB\db`

将会输出服务端相关信息，包括版本，数据库所在路径，监听端口号，数据库大小等等、看到这个说明你已经成功了,默认端口是27017

- 4.服务端开启后，可以用命令行链接服务端，链接文件是mongo.ext，不要关闭服务端Dos,重新打开一个dos窗口，输入mongo,链接后，输入以下指令：
```
查看存在数据库命令：mongo show dbs
查看数据库版本命令：mongo db.version()
```
如果有数据说明安装成功

### mongoDB常用指令

mongo shell 如果以前接触过数据库一定知道每个数据库都有自己独特的命令，MSSQL和MYsql用的都是Sql命令，MongoDB的操作命令就是前端最熟悉的JavaScript命令。看到这里作为前端你一定会小激动一下，这对前端来说那是极好的。

操作前你需要打开Mongo服务器和链接到服务器-也就是我们的mongod命令和mongo命令
```
var x='Hello World'
print(x)
```
这里的输出命令不是console.log，而是print

输入函数，输入一半时会有3个点表示没输完的语句可以继续输

###### MongoDB的存储结构
以前我们的关系型数据库的数据结构都是顶层是库，库下面是表，表下面是数据。但是MongoDB有所不同，库下面是集合，集合下面是文件，可以看下面这张图进行了解一下。

mongoddb(非关系型数据库) | mysql(关系型数据库)
---|---
文件(document) | 行(row)
集合(collections) | 表(table)
数据库(databases) | 数据库(databases)

- show dbs :显示已有数据库，如果你刚安装好，会默认有local、admin(config)，这是MongoDB的默认数据库，我们在新建库时是不允许起这些名称的。
- use admin： 进入数据，也可以理解成为使用数据库。成功会显示：switched to db admin。
- show collections: 显示数据库中的集合（关系型中叫表，我们要逐渐熟悉）。
db:显示当前位置，也就是你当前使用的数据库名称，这个命令算是最常用的，因为你在作任何操作的时候都要先查看一下自己所在的库，以免造成操作错误。
- use db（建立数据库）：use不仅可以进入一个数据库，如果你敲入的库不存在，它还可以帮你建立一个库。但是在没有集合前，它还是默认为空。
- db.collection.insertOne() 将单个文档插入到集合中
- db.collection.insertMany() 将多个 文档插入集合中
- db.集合.insert( ):新建数据集合和插入文件（数据），当集合没有时，这时候就可以新建一个集合，并向里边插入数据。Demo：db.user.insert({“name”:”xiaoling”})
- db.集合.find( ):查询所有数据，这条命令会列出集合下的所有数据，可以看到MongoDB是自动给我们加入了索引值的。Demo：db.user.find()
- db.集合.findOne( ):查询第一个文件数据，这里需要注意的，所有MongoDB的组合单词都使用首字母小写的驼峰式写法。
- db.集合.update({查询},{修改}):修改文件数据，第一个是查询条件，第二个是要修改成的值。这里注意的是可以多加文件数据项的，比如下面的例子。
- db.集合.remove(条件)：删除文件数据，注意的是要跟一个条件。Demo:db.user.remove({“name”:”xiaoling”})
- db.集合.deleteMany()  删除所有文档
- db.集合.drop( ):删除整个集合，这个在实际工作中一定要谨慎使用，如果是程序，一定要二次确认。
- db.dropDatabase( ):删除整个数据库，在删除库时，一定要先进入数据库，然后再删除。实际工作中这个基本不用，实际工作可定需要保留数据和痕迹的。
- exit 退出命令

### 在js中写mongodb
eg 新建一个login.js文件

```
var userName = 'niuxiaoling'; // 声明登录名
var timeStamp =  Date.parse(new Date());  //时间戳
var jsonDatebase = {
  'loginName':userName,
  "loginTime":timeStamp
}
var db = connect('log');//use log
db.login.insert(jsonDatebase); // login集合

print('log print success');
```

执行login.js
直接DOS中 mongo login.js

> 在操作数据库时要注意：
第一个是快速存储能力
第二个是迅速查询能力

### 批量插入数据
```
db.test.insert([
    {"_id":1},
    {"_id":2},
    {"_id":3}
])
```
> 注意一次插入不要超过48M，向.zip和大图片什么的尽量用静态存储，MongoDB存储静态路径就好，这也算是一个规则。

循环插入数据

```
var startTime = (new Date()).getTime(); //得到开始时间
var  db = connect('log');  //链接数据库
//开始循环
for(let i=0;i<1000;i++){
    db.test.insert({num:i});
}
 
var runTime = (new Date()).getTime()-startTime;//计算时间差
print ('This run this is:'+runTime+'ms');//打印出来 507ms
```

批量插入数据
```
var startTime = (new Date()).getTime();
var  db = connect('log');
 
 
var tempArray = []              //声明一个数组
for(let i=0;i<1000;i++){        //循环向数组中放入值
    tempArray.push({num:i});
}
db.test.insert(tempArray)       //批量一次插入
 
var runTime = (new Date()).getTime()-startTime;
print ('This run this is:'+runTime+'ms'); // 17ms
```

修改数据的错误点
插入数据文件demo02.js
```
var db = connect('log')

var webwork = {
  name: 'xiaoling',
  age: 18,
  sex: 0,
  skill: {
    skillOne: 'html',
    skillTwo: 'javascript',
    skillThree: 'node'
  }
}
var webwork1 = {
  name: 'list',
  age: 18,
  sex: 0,
  skill: {
    skillOne: 'html',
    skillTwo: 'javascript',
    skillThree: 'node'
  }
}
var webwork2 = {
  name: 'wangwu',
  age: 18,
  sex: 0,
  skill: {
    skillOne: 'html',
    skillTwo: 'javascript',
    skillThree: 'node'
  }
}
var workmoney = [webwork, webwork1, webwork2]
db.workspace.insert(workmoney)

print('The data was inserted successfully.')
```
错误点：只update修改项  

正确的：demo03.js可以声明一个变量，然后把要改变数据的全部信息放入变量，最后执行修改操作。
```
var db = connect('log')

var webwork2 = {
  name: 'chenming',
  age: 18,
  sex: 0,
  skill: {
    skillOne: 'html',
    skillTwo: 'javascript',
    skillThree: 'node'
  }
}

db.workspace.update({
  name: 'xiaoling'
}, webwork2)

print('[update] the data was updated successfully')
```
需要删除（db.workmate.drop()）表中的数据，因为MinJie这个用户已经不在数据库中了，然后重新使用load方法载入插入数据再进行修改。然后执行
db.workmate.drop()
load('./demo02.js')
load('./demo03.js')

### update修改器
- 输入db.workspace.update，可以看到update函数接收4个参数，query,fields,upsert,multi,其中第一个查询和第二个修改提交是必填的
- $set 用来修改一个指定的键值(key)
```
dbd .workmate.update({"name":"MinJie"},{"$set":{sex:2,age:21}})
```
- 修改嵌套内容(内嵌文档)
```
db.workmate.update({"name":"MinJie"},{"$set":{"skill.skillThree":'word'}})
```
- $unset用于将key值删除
```
db.workmate.update({"name":"MinJie"},{$unset:{"age":''}})
```
- $inc对数字计算
```
db.workspace.update({name: 'list'}, {$inc: {age: -2}}) 
```
- multi: true对所有的数据插入一个健值，true,全部加，false只加一条
```
db.workspace.update({}, {$set: {birth: ''}}, {multi: true})
```
- upsert也有两个值：true代表没有就添加，false代表没有不添加(默认值)。
```
db.workspace.update({name: 'xiaoling'}, {age: 15, sex: 1}, {upsert: true})
```

### update:数组修改器
- $push 追加数组/内嵌文档值
```
// db.workspace.update({name: 'xiaoling'}, {$push: {interest: 'draw'}})  // 为数组追加一条
```
- $ne 查找是否存在,不存在就执行，存在就不执行

```
db.workspace.update({name:'xiaoling',interest:{$ne:'computer'}},{$push:{interest:'computer'}}) // $ne 判断是否存在，存在不执行，不存在执行
```
- $addToSet 查找是否存在，不存在就push上去

- $each 批量追加
```
var interestList = ['sleep','music','computer','code'];
db.workspace.update({name:'xiaoling'},{$addToSet:{interest:{$each:interestList}}}) 
```

- $pop只删除一次，并不是删除所有数组中的值。而且它有两个选项，一个是1和-1。

 -  1：从数组末端进行删除
 -  -1：从数组开端进行删除
 ```
 db.workspace.update({name:'xiaoling'},{$pop:{interest:-1}}) // $pop 删除数组值,-1从开端删除，1从末端删除
 ```
 数组定位修改 
 
 有时候只知道修改数组的第几位，但并不知道是什么，这时候我们可以使用interest.int 的形式。
 ```
  db.workspace.update({name:'xiaoling'},{$set:{"interest.3":'work'}}) //根据数组的定位修改，interest.int
 ```
 
 ### 应答式操作
 
 非应答式操作即：在操作完数据库后，它给我们任何的回应和返回值
 
 应答式写入：就会给我们直接返回结果（报表），结果里边的包含项会很多，这样我们就可以很好的进行程序的控制和安全机制的处理。有点像前端调用后端接口，无论作什么，后端都要给我一些状态字一样。
 
 - db.runCommand() 数据库运行命令的执行器，执行命令首选就要使用它
 
- db.listCommands() 查看所有的Commad命令
- db.runCommand({ping:1}) 查看是否和数据库连接成功

- findAndModify  配置它可以在修改后给我们返回修改的结果
  - 属性值
  - query: 需要查询的条件/文档
  - sort: 进行排序
  - new[boolean]:返回更新前的文档还是更新后的文档
  - fields:需要返回的字段
  - upsert:没有这个值是否增加
  - remove[boolean]:是否删除查找到的文档，true，可以删除
  - update: 查找到修改，跟remove只能有1个
 
```
var myModify = {
  findAndModify: 'workspace',
  query: {age: 15},
  update: {$set: {name: 'xiaoling'}},
  new: true,
  upsert: true
}
var resultMessage = db.runCommand(myModify)
printjson(resultMessage)  // 输出json
```

### 查找：find的不等修饰符
- db.集合.find(要查找的内容，查找的条件)
```
db.workspace.find(
  {'skill.skillOne': 'html'},
  {name: true, 'skill.skillTwo': 1, _id: 0}
)   // 0 代表false,1代表true
```
 - 不等修饰符
 - 小于($lt):英文全称less-than
 - 小于等于($lte)：英文全称less-than-equal
 - 大于($gt):英文全称greater-than
 - 大于等于($gte):英文全称greater-than-equal
 - 不等于($ne):英文全称not-equal 

```
db.workspace.find(
  {age: {$lte: 30, $gte: 25}},
  {name: true, age: true, 'skill.skillOne': true, _id: false}
)
```
### 查找:find的多条件查询

- $in 多值查询条件 ,一个key，一健多值，相对的是$nin
```
db.workspace.find({age: {$in: [25, 30]}}, {_id: 0})
```
- $or 或者修饰符
```
db.workspace.find(
  {$or: [{age: {$gte: 30}}, {'skill.skillTwo': 'javascript'}]},
  {_id: 0}
)
```
- $and 需要同时满足
```
db.workspace.find(
  {$and: [{age: {$gte: 30}}, {'skill.skillTwo': 'javascript'}]},
  {_id: 0}
)
```
- $not 它用来查询除条件之外的值,需要注意的是$not修饰符不能应用在条件语句中，只能在外边进行查询使用。
```
db.workspace.find({
    age:{
        $not:{
            $lte:30,
            $gte:20
        }
    }
},
{name:1,"skill.skillOne":1,age:1,_id:0}
)
```

### 查找:find的数组查询
- db.workspace.find({interest:[]}) // 中括号代码完全匹配
- $all-数组多项查询
```
db.workspace.find({interest:{$all:['看电影','看书']}}) 
```
- $in- $in主要满足数组中的一项就可以被查出来
```
db.workspace.find({interest:{$in:['看电影','旅游']}})
```
- $size-数组个数查询
```
db.workspace.find({interest:{$size:5}})
```
- $slice-显示选项
```
db.workspace.find({},{name:1,interest:{$slice:2},_id:0}) // 查找所有的数据，只展示兴趣的前2条信息
```

### 查找：find的参数使用方法
- query：这个就是查询条件，MongoDB默认的第一个参数。
- fields：（返回内容）查询出来后显示的结果样式，可以用true和false控制是否显示。
- limit：返回的数量，后边跟数字，控制每次查询返回的结果数量。
- skip:跳过多少个显示，和limit结合可以实现分页。
- sort：排序方式，从小到大排序使用1，从大到小排序使用-1。

实现分页的demo,将limit和skip结合起来
```
db.workspace.find({},{name:true,age:true,_id:false}).limit(2).skip(0).sort({age:1});
```
- $where修饰符 这里的this指向的是workmate（查询集合）本身。这样我们就可以在程序中随意调用。虽然强大和灵活，但是这种查询对于数据库的压力和安全性都会变重，所以在工作中尽量减少$where修饰符的使用
```
db.workspace.find({$where:'this.age>30'},{name:true,age:true,_id:false})  // where查询，this指的是workspace集合
```

### find在js中正常显示

游标

- hasNext() 
```
var db = connect('log') // 链接集合log
var result = db.workspace.find({interest: {$size: 5}}) //查询 声明result,把查询结果赋值给result
//利用游标的hasNext()进行循环输出结果。
// while (result.hasNext()) {
//  printjson(result.next())
// }
或者利用foreach
result.forEach(function(result){
    printjson(result)
})
```

### 索引

- db.集合.getIndexes()  查看索引
- db.集合.ensureIndex({username:1})  建议索引

- 什么情况不需要使用索引？
  - 数据不超万条时，不需要使用索引。性能的提升并不明显，而大大增加了内存和硬盘的消耗。
  - 查询数据超过表数据量30%时，不要使用索引字段查询。实际证明会比不使用索引更慢，因为它大量检索了索引表和我们原表。
  - 数字索引，要比字符串索引快的多，在百万级甚至千万级数据量面前，使用数字索引是个明确的选择。
  - 把你经常查询的数据做成一个内嵌数据（对象型的数据），然后集体进行索引。

### 复合索引
加入现在再建立一个索引，查询的时候就是复合索引查询， MongoDB的复合查询是按照我们的索引顺序进行查询

### 自定义索引顺序hint
```
var rs = db.test
  .find({username: 'p3octakdxkn1u', randNum0: 169770})
  .hint({randNum0: 1, username: 2}) // MongoDB的复合查询是按照我们的索引顺序进行查询,用我们自己指定的索引优先查询，这个方法就是hint()
```

### 删除索引
db.集合.dropIndex('username_1') // 索引的唯一Id,索引的唯一id不是我们的字段名称而是索引查询表中的name

### 全文索引
- db.info.ensureIndex({contextInfo:'text'}) // text代表全文索引
- 全文索引查找
  - $text:表示要在全文索引中查东西。
  - $search:后边跟查找的内容。
```
var db = connect('log')
// db.info.insert({
//   contextInfo:
//     'I am a programmer, I love life, love family. Every day after work, I write a diary.'
// })
// db.info.insert({
//   contextInfo:
//     'I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink.'
// })

var rs = db.info.find({$text: {$search: 'PlayGame'}})
rs.forEach(rs => printjson(rs))

```
- 查找多个词
```
// var rs = db.info.find({$text: {$search: 'programmer family diary drink'}}) // 查找多个词
```
- 如果我们这时候希望不查找出来有drink这个单词的记录，我们可以使用“-”减号来取消。
```
var rs = db.info.find({$text: {$search: 'programmer family diary -drink'}})  // 不希望找到的
```
- 全文搜索中是支持转义符的，比如我们想搜索的是两个词（love PlayGame和drink），这时候需要使用\斜杠来转意
```
var rs = db.info.find({$text: {$search: '"love PlayGame" drink'}}) // 转义
```
### 内置角色：

- 数据库用户角色：read、readWrite；
- 数据库管理角色：dbAdmin、dbOwner、userAdmin;
- 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManage；
- 备份恢复角色：backup、restore；
- 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
- 超级用户角色：root
- 内部角色：__system

