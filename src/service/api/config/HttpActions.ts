import store from '@/store/store';
import axios, { AxiosRequestConfig, AxiosInstance, AxiosPromise } from 'axios';
import qs from 'qs';
import { restServerAddress } from '../../../UrlConfig';
import { ApiErrorInterceptor } from '@/shared/models';
import { ApiError } from '@/shared/helpers/error/apiError';
import { getAuthenticationStorageInfo } from '@/service/storage';

export default class HttpActions {
  private request: AxiosInstance;
  private host = restServerAddress;

  constructor(baseUrl: string, errorInterceptors: ApiErrorInterceptor[]) {
    const config: AxiosRequestConfig = {
      baseURL: this.host + baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      validateStatus: (status: number) => !(status >= 400 && status <= 500),
    };
    this.request = axios.create(config);
    this.request.interceptors.response.use(
      response => response,
      error => {
        if (error.response) {
          // handle logout infinity loop
          const {
            config: { url = '' },
          } = error.response;
          const resStatus = error.response.status;
          if (resStatus > 400) {
            const { status, data } = error.response;
            const apiErrorInstance = new ApiError(
              status,
              data.errorCode ? { message: data.errorCode } : { message: 'UNKNOWN_ERR' },
            );
            errorInterceptors.forEach(f => f(apiErrorInstance));
            store.dispatch('logout');
            throw apiErrorInstance;
          } else if (!url.includes('/logout')) {
            const { status, data } = error.response;
            const apiErrorInstance = new ApiError(
              status,
              data.errorCode ? { message: data.errorCode } : { message: 'Unknown Error' },
            );
            errorInterceptors.forEach(f => f(apiErrorInstance));
            throw apiErrorInstance;
          }
        } else {
          throw Error(error.message);
        }
      },
    );
  }

  public get<T>(url: string, params?: object, options?: AxiosRequestConfig): AxiosPromise<T> {
    let reqUrl = url;
    if (params) {
      reqUrl += `?${qs.stringify(params)}`;
    }
    const config: AxiosRequestConfig = {
      ...this.makeAuthRequest(),
      ...options,
    };
    return this.request.get(reqUrl, config);
  }

  public getDownload<T>(url: string, params?: object, options?: AxiosRequestConfig): AxiosPromise<T> {
    let reqUrl = url;
    if (params) {
      reqUrl += `?${qs.stringify(params)}`;
    }
    const config: AxiosRequestConfig = {
      ...this.makeAuthRequest(),
      ...options,
      responseType: 'blob',
    };
    return this.request.get(reqUrl, config);
  }


  public post<T>(url: string, data?: any, options?: AxiosRequestConfig): AxiosPromise<T> {
    return this.request.post(url, data, { ...this.makeAuthRequest<T>() });
  }

  public put<T>(url: string, data: any, params: object = {}, options?: AxiosRequestConfig): AxiosPromise<T> {
    return this.request.put(url, data, {
      params,
      ...this.makeAuthRequest<T>(),
    });
  }

  public del<T>(url: string, data: any = {}, params: object = {}, options?: AxiosRequestConfig): AxiosPromise<T> {
    const config: AxiosRequestConfig = {
      url,
      data,
      params,
      ...this.makeAuthRequest<T>(),
    };
    return this.request.delete(url, config);
  }

  private makeAuthRequest<T>(): AxiosRequestConfig | undefined {
    // this.shouldRefreshAuthenticate();
    const authorization = getAuthenticationStorageInfo();
    if (!authorization) {
      return undefined;
    }
    return {
      headers: {
        Authorization: `Bearer ${authorization.accessToken}`,
      },
    };
  }
}
