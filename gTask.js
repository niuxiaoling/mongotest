var userName = 'niuxiaoling'; // 声明登录名
var timeStamp =  Date.parse(new Date());  //时间戳
var jsonDatebase = {
  'loginName':userName,
  "loginTime":timeStamp
}
var db = connect('log');//use log
db.login.insert(jsonDatebase); // login集合

print('log print success');