// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isTouchBgColor: false,
    userInfo: {}
  },
  // 用户点击开始小程序按钮
  onWelcomeTap () {
    // 跳转到文章页面，路由
    wx.switchTab({
      url: "/pages/article/article"
    })
  },
  onTouch(){
    this.setData({
      isTouchBgColor: !this.data.isTouchBgColor
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success:res=>{
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            withCredentials: false,
            success:res=>{
              this.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})