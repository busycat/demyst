import { BalanceSheet } from '@demyst/models';
import { IAccountingProvider } from '../../abstractions/accounting-provider';

export class MyobAccountingProvider implements IAccountingProvider {
  name: 'myob';
  async getBalanceSheet(): Promise<BalanceSheet> {
    return await Promise.resolve([
      {
        year: 2023,
        month: 7,
        profitOrLoss: 250000,
        assetsValue: 1234,
      },
      {
        year: 2023,
        month: 6,
        profitOrLoss: 1150,
        assetsValue: 5789,
      },
      {
        year: 2023,
        month: 5,
        profitOrLoss: 2500,
        assetsValue: 22345,
      },
      {
        year: 2023,
        month: 4,
        profitOrLoss: -187000,
        assetsValue: 223452,
      },
      {
        year: 2023,
        month: 3,
        profitOrLoss: 87000,
        assetsValue: 22345,
      },
      {
        year: 2023,
        month: 2,
        profitOrLoss: 90000,
        assetsValue: 2245,
      },
    ]);
  }
}
