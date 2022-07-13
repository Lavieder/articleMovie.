// components/movies/index.js
Component({
  externalClasses: ["movie-touch"],
  /**
   * 组件的属性列表
   */
  properties: {
    movie: Object
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
    // 触摸显示选中的背景
    onTouchStart(){
      const data = {
        movieId: this.data.movie.id
      }
      this.triggerEvent("onTouchStart",data);
    },
    onTouchEnd(event){
      this.triggerEvent("onTouchEnd");
    },
  }
})
