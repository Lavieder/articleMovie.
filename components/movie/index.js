// components/movies/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie: Object,
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
    onTap(event){
      // console.log(event);
      this.triggerEvent("onGoToDetail");
    },
    // 图片资源找不到
    onImageError(event){
      const movie = {}
      movie.movieId = event.currentTarget.dataset.movieId;
      movie.errMsg = event.detail.errMsg;
      movie.timeStamp = event.timeStamp;
      movie.mut = event.mut;
      movie.type = event.type;
      this.triggerEvent("onImageError",movie);
    },
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
