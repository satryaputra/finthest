export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface IRefreshToken {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpire: Date;
}

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IAccessToken {
  accessToken: string;
}

export interface IRequestEmail {
  email: string;
}

export interface IForgotPassword {
  passwords: string;
}

export interface IGeneralResponse {
  message: string;
}

export interface ICalculationData {
  salary: number;
  loan: number | null;
  month: number | null;
  savingMoney: number | null;
  wish: string | null;
  price: number | null;
  year: number | null;
}
export interface IResponseCalculation {
  data: string;
}
