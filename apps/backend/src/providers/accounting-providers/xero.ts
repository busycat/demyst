import { BalanceSheet } from '@demyst/models';
import { IAccountingProvider } from '../../abstractions/accounting-provider';

export class XeroAccountingProvider implements IAccountingProvider {
  name: 'xero';

  async getBalanceSheet(): Promise<BalanceSheet> {
    const response: BalanceSheet = await fetch(
      `http://localhost:${process.env.PORT}/balancesheet.json`
    ).then((res) => res.json());

    return response;
  }
}
