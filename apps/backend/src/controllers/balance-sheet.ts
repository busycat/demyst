import { Request, Response } from 'express';
import { IAccountingProvider } from '../abstractions/accounting-provider';
import { SimulatedAccountingProvider } from '../providers/accounting-providers';
import { BalanceSheet, BalanceSheetRequest } from '@demyst/models';

export const getBalanceSheet = (
  req: Request<BalanceSheetRequest>,
  res: Response<BalanceSheet>
) => {
  const accountingProvider: IAccountingProvider =
    new SimulatedAccountingProvider();
  console.log(req.params.token, req.params.provider);

  res.status(200).json(accountingProvider.getBalanceSheet());
};
