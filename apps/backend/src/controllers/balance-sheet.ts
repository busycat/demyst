import { Request, Response } from 'express';
import { IAccountingProvider } from '../abstractions/accounting-provider';
import {
  AccountingProvider,
  BalanceSheet,
  BalanceSheetRequest,
} from '@demyst/models';

export const getBalanceSheet =
  (accountingProviderRegistry: Map<AccountingProvider, IAccountingProvider>) =>
  (
    req: Request<unknown, unknown, unknown, BalanceSheetRequest>,
    res: Response<BalanceSheet>
  ) => {
    const accountingProvider = accountingProviderRegistry.get(
      req.query.provider as AccountingProvider
    );

    res.status(200).json(accountingProvider.getBalanceSheet());
  };
