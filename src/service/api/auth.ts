import BaseApi from './config/Base';
import { ILoginRequest } from '@/shared/models';

export default class Auth extends BaseApi {
  private baseUrl: string = 'user';

  public async login(param: ILoginRequest): Promise<any> {
    const res = await this.actions.post(this.baseUrl + '/login', param);
    return res.data;
  }
}
