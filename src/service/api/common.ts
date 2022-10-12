import BaseApi from './config/Base';

export default class Common extends BaseApi {
  private baseUrl: string = 'common';

  public async getSomething(): Promise<any> {
    const res = await this.actions.get(this.baseUrl + '/get');
    return res.data;
  }
}
