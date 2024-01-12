export interface ICredentials {
  email: string;
  password: string;
}

export interface IRegisterData{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IAccessToken {
  accessToken: string;
}


export interface ICalculationData{
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

