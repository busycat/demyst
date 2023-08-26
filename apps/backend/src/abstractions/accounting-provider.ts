import { AccountingProvider, BalanceSheet } from '@demyst/models';

export interface IAccountingProvider {
  name: AccountingProvider;
  // Todo: Make it async
  getBalanceSheet(): BalanceSheet;
}
