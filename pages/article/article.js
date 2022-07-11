// ES5导入
// const { postList } = require("../../data/posts-data");
// ES6导入(推荐)
import { articleList, bannerList } from "../../data/posts-data"


// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    articleList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    this.setData({
      articleList,
      bannerList
    })
  },

  onGoToDetail (event){
    const pid = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid='+pid,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {

  }
})