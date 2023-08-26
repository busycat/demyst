import { IAccountingProvider } from '../abstractions/accounting-provider';
import { SimulatedAccountingProvider } from '../providers/accounting-providers';

export const getBalanceSheet = (req, res) => {
  const accountingProvider: IAccountingProvider =
    new SimulatedAccountingProvider();

  res.status(200).json(accountingProvider.getBalanceSheet());
};
