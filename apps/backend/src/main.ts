/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import { getBalanceSheet } from './controllers/balance-sheet';
import { getApplicationToken } from './controllers/initiate-application';
import { AccountingProvider } from '@demyst/models';
import { IAccountingProvider } from './abstractions/accounting-provider';
import { MyobAccountingProvider } from './providers/accounting-providers/myob';
import { SimulatedAccountingProvider } from './providers/accounting-providers';
import { XeroAccountingProvider } from './providers/accounting-providers/xero';
import path from 'path';
import { createDecision } from './controllers/decision-engine';

const accountingProviderRegistry: Map<AccountingProvider, IAccountingProvider> =
  new Map();
accountingProviderRegistry.set('myob', new MyobAccountingProvider());
accountingProviderRegistry.set('simulated', new SimulatedAccountingProvider());
accountingProviderRegistry.set('xero', new XeroAccountingProvider());

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => res.status(200).json({ status: 'Healthy' })); // Fake Health Check,

app.get('/api/initiate-application', getApplicationToken);
app.get('/api/balance-sheet', getBalanceSheet(accountingProviderRegistry));
app.post('/api/decision', createDecision);

app.use(/(?!\/api\/)/, express.static(path.join(__dirname, 'assets')));

app.get('*', (_, response) =>
  response.sendFile(path.resolve(__dirname, 'assets/index.html'))
);

export const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
