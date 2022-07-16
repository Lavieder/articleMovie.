// components/movie-list/index.js
Component({
  // 外部样式类
  externalClasses: ["m-class","touch-bgcolor"],
  
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    movies: Array,
    movieTouch: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGoToDetail(event){
      this.triggerEvent("onGoToDetail",event.detail)
    },
    onGoToMoreMovie() {
      this.triggerEvent("onGoToMoreMovie")
    },
    
    // 触摸显示选中的背景
    onTouchStart(event){
      this.triggerEvent("onTouchStart",event.detail);
    },
    onTouchEnd(event){
      this.triggerEvent("onTouchEnd");
    },


    // 图片资源找不到
    onImageError(event){
      this.triggerEvent("onImageError", event.detail);
    }
  }
})
