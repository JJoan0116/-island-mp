import ClassicModel from '../../services/classic';
import LikeModel from '../../services/like';
import { totalList } from '../../mockData/classic';

const classicModel = new ClassicModel();
const likeModel = new LikeModel();

Page({
  data: {
    classic: {},
    like: false,
    count: 0,
    // 最新
    latest: false,
    // 第一张
    first: false,
    latestIndex: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 获取最新的数据
    // classicModel.getLatest((data) => {}});
    this.setData({
      classic: totalList[0],
      like: totalList[0].like_status === 1,
      count: totalList[0].fav_nums,
      latest: true,
      latestIndex: totalList[0].index,
    });
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

  onNext(res) {
    const { latest, classic, latestIndex } = this.data;
    const currentIdx = classic.index - 1;
    // console.log('onNext', latest, classic.index);

    if (!latest) {
      // 从mock中取数
      this.setData({
        classic: totalList[currentIdx],
        like: totalList[currentIdx].like_status === 1,
        count: totalList[currentIdx].fav_nums,
        latest: totalList[currentIdx].index === latestIndex,
        first: totalList[currentIdx].index === 7,
      });
    }
  },

  onPrevious(res) {
    const { classic, latestIndex, first } = this.data;
    const currentIdx = classic.index + 1;
    // console.log('onPrevious', first, classic.index, currentIdx);

    if (!first) {
      this.setData({
        classic: totalList[currentIdx],
        like: totalList[currentIdx].like_status === 1,
        count: totalList[currentIdx].fav_nums,
        latest: totalList[currentIdx].index === latestIndex,
        first: totalList[currentIdx].index === 7,
      });
    }
  },
});
