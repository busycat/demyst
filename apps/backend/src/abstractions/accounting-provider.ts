import { BalanceSheet } from '@demyst/models';

export const AccountingProviderList = ['Simulated', 'Xero', 'MYOB'] as const;
type AccountingProvider = (typeof AccountingProviderList)[number];

export interface IAccountingProvider {
  name: AccountingProvider;
  // Todo: Make it async
  getBalanceSheet(): BalanceSheet;
}
