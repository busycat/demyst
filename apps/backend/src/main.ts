/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { BalanceSheets } from '@demyst/models';
import express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});
app.get<unknown, BalanceSheets>('/api/balance-sheet', (req, res) => {
  res.send([
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
  ]);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
