/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import { getBalanceSheet } from './controllers/balance-sheet';
import { getApplicationToken } from './controllers/initiate-application';

const app = express();

// app.use(/(?!\/api\/)/, express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => res.status(200).json({ status: 'Healthy' })); // Fake Health Check,

app.get('/api/initiate-application', getApplicationToken);
app.get('/api/balance-sheet', getBalanceSheet);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
