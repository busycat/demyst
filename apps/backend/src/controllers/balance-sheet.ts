import { IAccountingProvider } from '../abstractions/accounting-provider';

export const getBalanceSheetRoute =
  (accountingProvider: IAccountingProvider) => async () => {
    return accountingProvider.getBalanceSheet({ token: '' });
  };
