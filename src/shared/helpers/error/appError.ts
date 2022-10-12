import { ErrorType } from '@/shared/models';

export class AppError extends Error {
  public type: ErrorType;

  constructor(msg?: string, type?: ErrorType) {
    super(msg);
    this.type = type || 'APP';
  }
}
