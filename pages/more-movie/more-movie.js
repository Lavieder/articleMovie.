// pages/more-movie/more-movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    movieTouch: {},
    _movies: [],
    _type: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      _type: options.type
    })
    this.getMoreMovie(options.type)
  },

  // 请求更多电影数据
  getMoreMovie(type){
    wx.request({
      url: 'http://t.talelin.com/v2/movie/'+type,
      data: {
        start:this.data.movies.length,
        count:12
      },
      success:(res)=>{
        this.setData({
          movies: this.data.movies.concat(res.data.subjects)
        })
        wx.hideNavigationBarLoading()
      }
    })
  },
  // 图片资源找不到,填充默认图片
  onImageError(event){
    const movieId= event.detail.movieId;
    const movies = this.data.movies.filter((res)=>{
      if(res.id == movieId){
        res.images.large = "/images/default-movie.jpg"
      }
      return res;
    })
    this.setData({ movies });
  },

  // 跳转到电影详情页
  onGoToDetail(event){
    this.onTouchStart(event);
    const movieId = event.detail.movieId
    wx.navigateTo({
      url: '/pages/movie-detail/movie-detail?movieId='+movieId,
    })
    this.onTouchEnd();
  },

  // 触摸显示选中的背景
  onTouchStart(event){
    let movieId = null;
    if(event.type != "tap"){
      movieId = event.detail.movieId;
    }
    if(movieId != undefined){
      const movieTouch = {
        currentMovieId: movieId,
        isTouchBgColor: true
      }
      this.setData({
        movieTouch
      })
    } else {
      const movieTouch = {
        isTouchBgColor: true
      }
      this.setData({
        movieTouch
      })
    }
  },
  onTouchEnd(event){
    const movieTouch = {
      isTouchBgColor: false,
      currentMovieId: -1
    }
    this.setData({
      movieTouch
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    let title = "电影";
    switch(this.data._type){
      case "in_theaters": title = "正在热映"; break
      case "coming_soon": title = "即将上映"; break
      case "top250": title = "豆瓣Top250"; break
    }
    wx.setNavigationBarTitle({
      title: title
    })
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
    // 下拉刷新最新数据,一般加载初始数据
    wx.request({
      url: 'http://t.talelin.com/v2/movie/'+this.data._type,
      data: {
        start:0,
        count:12
      },
      success:(res)=>{
        this.setData({
          movies: res.data.subjects
        })
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 上拉加载更多数据
    this.getMoreMovie(this.data._type);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})