// 获取App实例
const app = getApp();
let name = app.globalData.name;
let age = app.globalData.age;
// console.log(name,age);
import request from '../../server/network.js';
Page({
  // -----------1.初始化-----------------
  data: {
    name: 'bady',
    students: [
      {name: 'koby', age: 30},
      {name: 'james', age: 28},
      {name: 'ck', age: 18}
    ],
    counter: 0
  },
  // ----------2.监听wxml相关的一些事件-------------
  handerBtnAdd () {
      // 改变counter数据
      this.setData({
          counter: this.data.counter + 1
      })
  },
  handerBtnSub () {
     // 改变counter数据
      this.setData({
          counter: this.data.counter - 1
      })
  },
  handleGetUserInfo (event) {
      // 获取用户信息
      console.log(event)
  },
  // -----------3.监听页面生命周期函数----------------
  // 页面被加载出来
  onLoad () {
      console.log("onLoad");
    // 1.可以写发送网络请求 get请求   原生网络请求
    //   wx.request({
    //     url: 'http://123.207.32.32:8000/home/data',
    //     data: {
    //         type: 'sell',
    //         page: 1
    //     },
    //     success: function(res){
    //         console.log(res); 
    //     },
    //     fail: function(err) {
    //         console.log(err)
    //     }
    //   })
    // 2.封装网络请求 使用promise
    request({
        url: 'http://123.207.32.32:8000/home/data',
        data: {
            type: 'sell',
            page: 1
        }
    }).then(res => {
        console.log(123,res);
    }).catch(err => {
        console.log(456, err);
    })
  },
  // 页面显示出来时
  onShow () {
      console.log("onshow")
  },
  // 页面初次渲染完成时(执行一次)
  onReady () {
      console.log("onReady")
  },
  // 页面隐藏起来时
  onHide () {
      console.log("onHide")
  },
  // 页面卸载时触发
  onUnload () {
      console.log("onUnload")
  },
  // -----------4.其他事件----------------
  // 监听页面滚动
  onPageScroll (obj) {
      console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom () {
      console.log("页面滚动到底部")
  },
  // 下拉刷新事件
  onPullDownRefresh () {
      console.log("下拉刷新事件")
  },
  // 当前是 tab 页时，点击 tab 时触发
  onTabItemTap () {
      console.log("点击tab时触发")
  }
})