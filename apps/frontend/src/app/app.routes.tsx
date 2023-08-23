import { RouteObject } from 'react-router-dom';
import { BalanceSheet } from '../components/balance-sheet/balance-sheet';
import { ErrorPage } from './error-page';

export const routes: RouteObject[] = [
  {
    path: 'b',
    Component: BalanceSheet,
  },
  {
    path: '**',
    Component: ErrorPage,
  },
];
