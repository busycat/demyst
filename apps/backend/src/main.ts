/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { BalanceSheets } from '@demyst/models';
import express from 'express';
import * as path from 'path';
import { getBalanceSheet } from './controllers/balance-sheet';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});
app.get<unknown, BalanceSheets>('/api/balance-sheet', getBalanceSheet);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
