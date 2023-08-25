import { BalanceSheet } from '@demyst/models';
import { Axios } from 'axios-observable';
import { useState, useEffect, FC } from 'react';

/* eslint-disable-next-line */
export interface BalanceSheetProps {}

export const BalanceSheetComp: FC<BalanceSheetProps> = (props) => {
  const [balanceSheet, setBalanceSheet] = useState<BalanceSheet>();
  useEffect(() => {
    Axios.get<BalanceSheet>('/api/balance-sheet').subscribe({
      next: ({ data }) => setBalanceSheet(data),
    });
  }, []);

  return (
    <div>
      <h1>Welcome to BalanceSheet!</h1>

      {balanceSheet?.map((bs) => (
        <div>
          Asset Value: {bs.assetsValue} with {bs.profitOrLoss}
        </div>
      ))}
    </div>
  );
};
