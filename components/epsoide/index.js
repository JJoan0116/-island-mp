// components/epsoide/epsoide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer: function () {
        //
      },
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
    _index: String,
    month: String,
    year: Number,
  },

  ready: function () {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    this.setData({
      month: this.data.month[month],
      year,
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {},
});
