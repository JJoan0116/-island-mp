// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    latest: Boolean,
    first: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: './images/triangle.dis@left.png',
    highLeftSrc: './images/triangle@left.png',
    disRightSrc: './images/triangle.dis@right.png',
    highRightSrc: './images/triangle@right.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 左滑
    onLeft() {
      // console.log('left');
      this.triggerEvent('left', {}, {});
    },
    // 右滑
    onRight() {
      // console.log('right');
      this.triggerEvent('right', {}, {});
    },
  },
});
