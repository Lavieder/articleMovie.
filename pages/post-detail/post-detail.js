import { articleList } from "../../data/posts-data"
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    collected: false,
    isPlaying: false,
    _article_id: null,
    _aricleCollected: {},
    _bgMusic: null
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
    this.data._article_id = pid;
    let _aricleCollected = wx.getStorageSync("aricle_collected");
    if(!_aricleCollected){
      _aricleCollected = {};
    }
    let collected = _aricleCollected[this.data._article_id];
    return {
      article: article[0],
      _aricleCollected,
      collected
    };
  },

  // 文章收藏按钮事件
  onCollect(){
    const _aricleCollected = this.data._aricleCollected;
    const collected = this.data.collected;
    _aricleCollected[this.data._article_id] = !collected;
    if(_aricleCollected[this.data._article_id] == false){
      Reflect.deleteProperty(_aricleCollected, this.data._article_id);
    }
    wx.setStorageSync("aricle_collected",_aricleCollected);
    wx.showToast({
      title: this.data.collected ? "取消收藏": "收藏成功",
      duration: 1500
    });
    this.setData({
      collected: !collected
    })
  },

  // 分享按钮
  async onShare() {
    const result = await wx.showActionSheet({
      itemList: ["分享到QQ", "分享到微信", "分享到朋友圈"],
    })
    console.log(result);
  },
  
  // 播放音乐
  onMusicStart() {
    const bgMusic = this.data._bgMusic;
    const music = this.data.article.music;
    bgMusic.title = music.title;
    bgMusic.singer = music.singer;
    bgMusic.epname = music.epname;
    bgMusic.coverImgUrl = music.coverImg;
    bgMusic.src = music.url;
    app.gIsPlayingMusic = true;
    app.gIsPlayingArticleId = this.data._article_id;
    this.setData({
      isPlaying: true
    })
  },
  // 暂停音乐
  onMusicStop(){
    const bgMusic = this.data._bgMusic;
    bgMusic.pause();
    app.gIsPlayingMusic = false;
    app.gIsPlayingArticleId = -1;
    this.setData({
      isPlaying: false
    })
  },
  // 当前文章的音乐是否播放
  currentMusicIsPlaying(){
    if(app.gIsPlayingMusic && app.gIsPlayingArticleId === this.data._article_id){
      return true;
    }
    return false;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    const articleInfo = this.getArticle(options);
    this.setData({
      article: articleInfo.article,
      collected: articleInfo.collected,
      _aricleCollected: articleInfo._aricleCollected,
      isPlaying: this.currentMusicIsPlaying()
    })

    const bgMusic = wx.getBackgroundAudioManager();
    this.data._bgMusic = bgMusic;
    bgMusic.onPlay(this.onMusicStart);
    bgMusic.onPause(this.onMusicStop);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.onMusicStart();
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