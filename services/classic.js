import Http from '../utils/http';

class classicModel extends Http {
  constructor() {
    super();
  }

  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        //
      },
    });
  }
}

export default classicModel;
