/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import { getBalanceSheet } from './controllers/balance-sheet';

const app = express();

// app.use(/(?!\/api\/)/, express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => res.status(200).json({ ok: 123 }));
app.get('/api/balance-sheet', getBalanceSheet);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
