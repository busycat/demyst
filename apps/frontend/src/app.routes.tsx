import { RouteObject } from 'react-router-dom';
import { ErrorPage } from './app/error-page';
import { Home } from './components/home/home';
import { appUrls } from './constants/appUrls';
import StartLoan from './components/start-loan/start-loan';

export const routes: RouteObject[] = [
  {
    path: appUrls.startLoan,
    Component: StartLoan,
  },
  {
    path: appUrls.home,
    Component: Home,
  },
  {
    path: '*',
    element: <ErrorPage message="Not Found" />,
  },
];
