// 创作百万级数据

//生成随机数
function randomNum(min, max) {
  let range = max - min
  let random = Math.random()
  return min + Math.round(range * random)
}

// console.log(randomNum(10000, 99999))

// 生成随机的用户名

function randomUserName(min, max) {
  let tempArry = '123456789qwertyuiopasdfghjklzxcvbnm'.split('') // 生成随机的字符库数组
  let outname = '' // 结果变量
  for (let i = 1; i < randomNum(min, max); i++) {
    outname = outname + tempArry[randomNum(0, tempArry.length)]
  }
  return outname
}
// console.log(randomUserName(1, 4))

var db = connect('log')
db.test.drop()
var tmeInfo = []
for (let i = 0; i < 2000000; i++) {
  tmeInfo.push({
    username: randomUserName(7, 16),
    regeditTime: new Date(),
    randNum0: randomNum(100000, 999999),
    randNum1: randomNum(100000, 999999),
    randNum2: randomNum(100000, 999999),
    randNum3: randomNum(100000, 999999),
    randNum4: randomNum(100000, 999999),
    randNum5: randomNum(100000, 999999),
    randNum6: randomNum(100000, 999999),
    randNum7: randomNum(100000, 999999),
    randNum8: randomNum(100000, 999999),
    randNum8: randomNum(100000, 999999)
  })
}
db.test.insert(tmeInfo)
print('insert successful')
