import { Request, Response } from 'express';
import { IAccountingProvider } from '../abstractions/accounting-provider';
import {
  AccountingProvider,
  BalanceSheet,
  BalanceSheetRequest,
} from '@demyst/models';

export const getBalanceSheet =
  (accountingProviderRegistry: Map<AccountingProvider, IAccountingProvider>) =>
  async (
    req: Request<unknown, unknown, unknown, BalanceSheetRequest>,
    res: Response<BalanceSheet>
  ) => {
    const accountingProvider = accountingProviderRegistry.get(
      req.query.provider as AccountingProvider
    );
    const response = await accountingProvider.getBalanceSheet();
    res.status(200).json(response);
  };
