// components/article/index.js

Component({
  externalClasses: ["article-touch"],
  /**
   * 组件的属性列表
   */
  properties: {
    articleItem: Object
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
      const data = {
        postId: event.currentTarget.dataset.postid
      }
      // 向父组件通信，传递事件
      // triggerEvent("父组件的自定义方法名"，需要传递的值)
      this.triggerEvent("articleTap", data);
    },
    // 触摸显示选中的背景
    onTouchStart(event){
      const data = {
        postId: event.currentTarget.dataset.postid
      }
      this.triggerEvent("onTouchStart", data);
    },
    onTouchEnd(event){
      this.triggerEvent("onTouchEnd");
    },
  }
})
