import { ApiErrorInterceptor } from '@/shared/models';
import HttpActions from './config/HttpActions';
import CommonApi from './common';

export default class Api {
  public common: CommonApi;
  private actions: HttpActions;
  private errorInterceptors: ApiErrorInterceptor[] = [];

  constructor() {
    this.actions = new HttpActions('base-here/', this.errorInterceptors);
    this.common = new CommonApi(this.actions);
  }
}

export interface IApi {
  common: CommonApi;
}

