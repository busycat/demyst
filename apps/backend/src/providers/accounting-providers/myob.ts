import { BalanceSheet } from '@demyst/models';
import { IAccountingProvider } from '../../abstractions/accounting-provider';
import { port } from '../../main';

export class MyobAccountingProvider implements IAccountingProvider {
  name: 'myob';
  async getBalanceSheet(): Promise<BalanceSheet> {
    const bs: BalanceSheet = await fetch(
      `http://localhost:${port}/balancesheet.json`
    ).then((res) => res.json());

    const response = bs.map((a) => ({
      ...a,
      profitOrLoss: Math.round(
        Math.abs(a.profitOrLoss * 2 * Math.random()) *
          (Math.random() > 0.8 ? -1 : 1)
      ),
      assetsValue: Math.round(a.assetsValue * 2 * Math.random()),
    }));

    return response;
  }
}
