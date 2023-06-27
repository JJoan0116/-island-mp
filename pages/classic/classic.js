import ClassicModel from '../../services/classic';
import LikeModel from '../../services/like';

const classicModel = new ClassicModel();
const likeModel = new LikeModel();

Page({
  data: {
    classic: {},
    like: false,
    count: 0,
    latest: true,
    first: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // classicModel.getLatest((data) => {
    //   //sCallback
    //   // this._getLikeStatus(data.id, data.type);
    //   this.setData({
    //     classic: data,
    //   });
    // });
  },

  _getLikeStatus: function (cid, type) {
    likeModel.getClassicLikeStatus(cid, type, (data) => {
      this.setData({
        like: data.like_status,
        count: data.fav_nums,
      });
    });
  },

  onLike: function (res) {
    const { detail } = res;
    console.log('res', res, detail);
  },
});
