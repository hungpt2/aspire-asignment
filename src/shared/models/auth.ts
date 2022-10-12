export interface ILoginInfo {
  profile: any;
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
