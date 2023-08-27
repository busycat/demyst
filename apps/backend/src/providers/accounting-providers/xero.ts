import { BalanceSheet } from '@demyst/models';
import { IAccountingProvider } from '../../abstractions/accounting-provider';
import { port } from '../../main';

export class XeroAccountingProvider implements IAccountingProvider {
  name: 'xero';

  async getBalanceSheet(): Promise<BalanceSheet> {
    const response: BalanceSheet = await fetch(
      `http://localhost:${port}/balancesheet.json`
    ).then((res) => res.json());

    return response;
  }
}
