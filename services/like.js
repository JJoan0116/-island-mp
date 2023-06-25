import Http from '../utils/http';

class LikeModel extends Http {
  constructor() {
    super();
  }

  like(urlType, art_id, type) {
    let url = urlType === 'cancel' ? 'like/cancel' : 'like';
    this.request({
      url,
      data: {
        art_id,
        type,
      },
      method: 'POST',
      success: (res) => {
        console.log('like', res);
      },
      error: () => {
        wx.showToast({
          title: '请求失败',
          icon: 'error',
          duration: 2000,
        });
      },
    });
  }
}

export default LikeModel;
