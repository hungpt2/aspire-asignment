import { IServerError } from '@/shared/models';
import { AppError } from '@/shared/helpers/error/appError';

export class ApiError extends AppError {
  public status: number;
  public errors: IServerError;

  constructor(status: number, errors: IServerError) {
    super('API error', 'API');
    this.status = status;
    this.errors = errors;
  }
}

export function getErrorMessage(error: any): string {
  let message = String(error);
  if (error instanceof Error) {
    message = isApiError(error) ? getApiError(error) : `APP ERR - MSG: ${error.message}`;
  }
  return message;
}

export function isApiError(error: ApiError | Error): error is ApiError {
  return (error as ApiError).type === 'API';
}

export function getApiError(error: ApiError) {
  return `SERVER-ERROR.${error.errors.message}`;
}
