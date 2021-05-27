// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(11111,event)
  console.log(22222,context)
  return {
    sum: event.a + event.b
  }
}