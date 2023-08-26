import { RouteObject } from 'react-router-dom';
import { BalanceSheetComp } from './components/balance-sheet/balance-sheet';
import { ErrorPage } from './app/error-page';
import { Home } from './components/home/home';

export const routes: RouteObject[] = [
  {
    path: 'b',
    Component: BalanceSheetComp,
  },
  {
    path: 'home',
    Component: Home,
  },
  {
    path: '*',
    element: <ErrorPage message="Not Found" />,
  },
];
