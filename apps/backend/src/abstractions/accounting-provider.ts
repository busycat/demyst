import { AccountingProvider, BalanceSheet } from '@demyst/models';

export interface IAccountingProvider {
  name: AccountingProvider;
  getBalanceSheet(): Promise<BalanceSheet>;
}
