import { BalanceSheets } from '@demyst/models';
import { Axios } from 'axios-observable';
import { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface BalanceSheetProps {}

export function BalanceSheet(props: BalanceSheetProps) {
  const [balanceSheet, setBalanceSheet] = useState<BalanceSheets>();
  useEffect(() => {
    Axios.get<BalanceSheets>('/api/balance-sheet').subscribe({
      next: ({ data }) => setBalanceSheet(data),
    });
  }, []);

  return (
    <div>
      <h1>Welcome to BalanceSheet!</h1>

      <ul>
        <li>
          <Link to="/">BalanceSheet root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the BalanceSheet root route.</div>}
      />

      {balanceSheet?.map((bs) => (
        <div>
          Asset Value: {bs.assetsValue} with {bs.profitOrLoss}
        </div>
      ))}
    </div>
  );
}

export default BalanceSheet;
