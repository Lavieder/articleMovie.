// pages/movie-detail/movie-detail.js
import { convertToCastString, convertToCastInfos } from "../../util/util"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const movieId = options.movieId;
    wx.request({
      url: 'http://t.talelin.com/v2/movie/subject/'+movieId,
      success:res=>{
        this.processMovieData(res.data);
      }
    })
  },

  // 点击图片全屏预览
  onPreViewImage(){
    wx.previewImage({
      urls: [this.data.movie.images.large]
    })
  },

  // 图片资源找不到
  onImageError(){
    const movie = this.data.movie;
    movie.image = "/images/default-movie.jpg"
    this.setData({
      movie
    })
  },

  // 处理电影数据
  processMovieData(movie){
    const data = {};
    data.directors = convertToCastString(movie.directors, " / ");
    data.castsName = convertToCastString(movie.casts, " / ");
    data.image = movie.images.large ?movie.images.large : "/images/default-movie.jpg";
    data.title = movie.title;
    data.subtitle = movie.countries[0]+' - '+movie.year;
    data.wish_count = movie.wish_count;
    data.comments_count = movie.comments_count;
    data.rating = movie.rating.stars/10;
    data.average = movie.rating.average;
    data.genres = movie.genres.join("、");
    data.summary = movie.summary ? movie.summary : "暂无简介...";
    data.castsInfo = convertToCastInfos(movie.casts);
    this.setData({
      movie: data
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