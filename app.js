// 小程序启动时
App({
  onLaunch(){
    // console.log("小程序启动");
  },
  // 全局变量 音乐是否在播放
  gIsPlayingMusic: false,
  // 哪一首音乐在播放
  gIsPlayingArticleId: -1,
  // 触摸某个内容显示选中状态
  gIsTouchBgColor: false,
  gIsTouchId: -1
})