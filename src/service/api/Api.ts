import { ApiErrorInterceptor } from '@/shared/models';
import HttpActions from './config/HttpActions';
import AuthApi from './auth';

export default class Api {
  public auth: AuthApi;
  private actions: HttpActions;
  private errorInterceptors: ApiErrorInterceptor[] = [];

  constructor() {
    this.actions = new HttpActions('admin/v1/', this.errorInterceptors);
    this.auth = new AuthApi(this.actions);
  }
}

export interface IApi {
  auth: AuthApi;
}

