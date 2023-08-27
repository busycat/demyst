import { AccountingProviderList } from './misc';

export const CURRENCY_SYMBOL = '$';
export const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

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

export type DecisionRequest = LoanApplicationRequest & {
  sheet: BalanceSheet;
};

export interface DecisionOutcome {
  token: string;
  outcome: 'Approved' | 'Rejected';
  approvedAmount: number;
}
