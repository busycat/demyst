export interface BalanceSheet {
  year: number;
  month: number;
  profitOrLoss: number;
  assetsValue: number;
}
export type BalanceSheets = BalanceSheet[];
