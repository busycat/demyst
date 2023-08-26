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
