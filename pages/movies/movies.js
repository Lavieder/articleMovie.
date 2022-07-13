// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: [],
    comingSoon: [],
    top250: [],
    searchResult: false,
    inputValue: "",
    serachMovies: {},
    type: null,
    isTouchBgColor: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInTheaters();
    this.getComingSoon();
    this.getTop250();
  },

  // 获取正在热映数据
  getInTheaters(){
    wx.request({
      url: 'http://t.talelin.com/v2/movie/in_theaters',
      data: {
        start:0,
        count:3
      },
      success:(res)=>{
        this.setData({
          inTheaters: res.data.subjects
        })
      }
    })
  },
  // 获取即将上映数据
  getComingSoon(){
    wx.request({
      url: 'http://t.talelin.com/v2/movie/coming_soon?start=0&count=3',
      success:(res)=>{
        this.setData({
          comingSoon: res.data.subjects
        })
      }
    })
  },
  // 获取豆瓣Top250的数据
  getTop250(){
    wx.request({
      url: 'http://t.talelin.com/v2/movie/top250?start=0&count=3',
      success:(res)=>{
        this.setData({
          top250: res.data.subjects
        })
      }
    })
  },

  // 跳转到更多页面
  onGoToMoreMovie(event){
    this.onTouchStart(event);
    wx.navigateTo({
      url: "/pages/more-movie/more-movie?type="+event.currentTarget.dataset.type
    })
    this.onTouchEnd();
  },

  // 搜索按钮
  onConfirm(event){
    this.setData({
      searchResult: !this.data.searchResult
    })
    wx.request({
      url: 'http://t.talelin.com/v2/movie/search',
      data: {
        q: event.detail.value
      },
      success:(res)=>{
        this.setData({
          serachMovies: res.data
        })
      }
    })
  },
  // 点击取消搜索按钮
  onSearchCancel(){
    this.setData({
      searchResult: false,
      inputValue: ""
    })
  },
  
  // 触摸显示选中的背景
  onTouchStart(event){
    this.setData({
      type: event.currentTarget.dataset.type,
      isTouchBgColor: true
    })
  },
  onTouchEnd(event){
    this.setData({
      type: null,
      isTouchBgColor: false
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