// components/preview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: Boolean,
    count: Number,
    readOnly: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
    yes_url: 'images/like.png',
    no_url: 'images/like@dis.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function () {
      console.log('like');
    },
  },
});