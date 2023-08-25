export interface BalanceEntry {
  year: number;
  month: number;
  profitOrLoss: number;
  assetsValue: number;
}
export type BalanceSheet = BalanceEntry[];
