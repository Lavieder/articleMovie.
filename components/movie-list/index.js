// components/movie-list/index.js
Component({
  // 外部样式类
  externalClasses: ["m-class","touch-bgcolor"],
  
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    movies: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentMovieId: -1,
    isTouchBgColor: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGoToMoreMovie() {
      this.triggerEvent("onGoToMoreMovie")
    },
    
    // 子组件：触摸显示选中的背景
    onTouchStart(event){
      this.triggerEvent("onTouchStart");
    },
    onTouchEnd(event){
      this.triggerEvent("onTouchEnd");
    },

    // 父组件：触摸具体某部电影显示选中的背景
    onTap(event){
      this.onMovieTouchStart(event);
      this.onMovieTouchEnd();
    },
    onMovieTouchStart(event){
      this.setData({
        currentMovieId: event.detail.movieId,
        isTouchBgColor: true
      })
    },
    onMovieTouchEnd(event){
      this.setData({
        currentMovieId: -1,
        isTouchBgColor: false
      })
    },

    // 图片资源找不到
    onImageError(event){
      this.triggerEvent("onImageError", event.detail);
    }
  }
})
