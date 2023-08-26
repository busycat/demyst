export interface BalanceEntry {
  year: number;
  month: number;
  profitOrLoss: number;
  assetsValue: number;
}
export type BalanceSheet = BalanceEntry[];

export interface StartApplication {
  token: string;
  providers: {
    name: string;
    value: string;
  }[];
}

export interface LoanApplicationRequest {
  token: string;
  companyName: string;
  companyEmail: string;
  companyAddress: string;
  companyPhone: number;
  provider: string;
  amount: number;
}
