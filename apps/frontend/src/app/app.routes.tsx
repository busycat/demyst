import { RouteObject } from 'react-router-dom';
import { BalanceSheetComp } from '../components/balance-sheet/balance-sheet';
import { ErrorPage } from './error-page';

export const routes: RouteObject[] = [
  {
    path: 'b',
    Component: BalanceSheetComp,
  },
  {
    path: '*',
    element: <ErrorPage message="Not Found" />,
  },
];
