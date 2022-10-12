import { ApiError } from '../helpers/error/apiError';

export interface IServerError {
  message: string;
}

export type ErrorType = 'APP' | 'API' | 'VIEW';
export type ApiErrorInterceptor = (apiError: ApiError) => void;
