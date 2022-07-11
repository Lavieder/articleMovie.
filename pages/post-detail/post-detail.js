import { articleList } from "../../data/posts-data"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    article_id: null,
    collected: false
  },

  // 根据pid获取文章数据
  getArticle(options) {
    if (!options){
      return wx.navigateBack({
        delta: 1,
      });
    }
    const pid = parseInt(options.pid);
    const article = articleList.filter((item)=>{
      return item.postId === pid
    })
    this.data.article_id = pid;
    return article[0];
  },

  // 文章收藏按钮事件
  onCollect(){
    const aricleCollected = {};
    const collected = this.data.collected;
    aricleCollected[this.data.article_id] = !collected;
    wx.setStorageSync("aricle_collected",aricleCollected);
    this.setData({
      collected: !collected
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    this.setData({
      article: this.getArticle(options)
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