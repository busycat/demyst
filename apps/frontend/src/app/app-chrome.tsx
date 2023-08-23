import { FC, ReactNode } from 'react';
import { Link, Outlet, Route } from 'react-router-dom';
import { routes } from './app.routes';

export const AppChrome: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <header>
      <ul>
        <li>
          <Link to={'/b'}>Start Loan</Link>
        </li>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
    </header>
    <Outlet />
  </>
);
