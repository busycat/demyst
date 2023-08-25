/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { BalanceSheet } from '@demyst/models';
import express from 'express';
import * as path from 'path';
import { getBalanceSheetRoute } from './controllers/balance-sheet';
import { SimulatedAccountingProvider } from './providers/accounting-providers';
import { IAccountingProvider } from './abstractions/accounting-provider';

const accountingProvider: IAccountingProvider =
  new SimulatedAccountingProvider();

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get<unknown, BalanceSheet>(
  '/api/balance-sheet',
  getBalanceSheetRoute(accountingProvider)
);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
