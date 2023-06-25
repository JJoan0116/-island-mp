import { config } from '../config';

class Http {
  constructor() {
    this.baseRestUrl = config.api_blink_url;
  }

  request(params) {
    var url = this.baseRestUrl + params.url;

    if (!params.method) {
      params.method = 'GET';
    }
    wx.request({
      url,
      data: params.data,
      method: params.method,
      header: {
        'content-type': 'application/json',
        appkey: config.appkey,
      },
      success: (res) => {
        // console.log(res);
        const code = res.statusCode.toString();
        const startChar = code.charAt(0);
        if (startChar === '2') {
          params.success && params.success(res.data);
        } else {
          params.error && params.error(res);
        }
      },
      fail: (err) => {
        params.error && params.error(err);
      },
    });
  }
}

export default Http;
