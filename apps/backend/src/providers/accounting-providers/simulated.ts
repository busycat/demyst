import { BalanceSheet } from '@demyst/models';
import { IAccountingProvider } from '../../abstractions/accounting-provider';

export class SimulatedAccountingProvider implements IAccountingProvider {
  name: 'Simulated';

  getBalanceSheet(): BalanceSheet {
    return [
      {
        year: 2020,
        month: 12,
        profitOrLoss: 250000,
        assetsValue: 1234,
      },
      {
        year: 2020,
        month: 11,
        profitOrLoss: 1150,
        assetsValue: 5789,
      },
      {
        year: 2020,
        month: 10,
        profitOrLoss: 2500,
        assetsValue: 22345,
      },
      {
        year: 2020,
        month: 9,
        profitOrLoss: -187000,
        assetsValue: 223452,
      },
    ];
  }
}
