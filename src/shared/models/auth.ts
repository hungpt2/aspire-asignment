import { IUserInfo } from '@/shared/models/user';

export interface ILoginInfo {
  profile: IUserInfo;
  token: string;
}

export interface ITokenInfo {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface ILoginRequest {
  code?: number;
  email: string;
  password: string;
}
