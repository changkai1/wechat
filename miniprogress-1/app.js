App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
      // console.log('小程序初始化完成时调用：onLaunch');
  
      // 1.获取用户信息
      wx.getUserInfo({
          success: function(res) {
            //   console.log('用户信息',res)
          }
      })

      // 2.options.scene 判断小程序在哪个入口进入
    //   console.log('options', options)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
        // console.log('小程序启动调用: onShow');
        
        // options.scene 判断小程序在哪个入口进入
        // console.log('options', options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
        // console.log('当小程序进入后台时触发：onHide');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  // 保存全局变量  
  globalData: {
        name: 'ck',
        age: 20
  }
})
