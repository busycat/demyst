import { AccountingProviderList } from './misc';

export type AccountingProvider = Lowercase<
  (typeof AccountingProviderList)[number]
>;

export interface BalanceEntry {
  year: number;
  month: number;
  profitOrLoss: number;
  assetsValue: number;
}
export interface BalanceSheetRequest {
  token: string;
  provider: AccountingProvider;
}

export type BalanceSheet = BalanceEntry[];

export interface StartApplication {
  token: string;
  providers: {
    name: string;
    value: AccountingProvider;
  }[];
}

export interface LoanApplicationRequest {
  token: string;
  companyName: string;
  companyEmail: string;
  companyAddress: string;
  companyPhone: number;
  establishmentDate: Date;
  provider: AccountingProvider;
  amount: number;
}
