import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const AppChrome: FC = () => (
  <>
    <header>
      <ul>
        <li>
          <Link to={'/b'}>Start Loan</Link>
        </li>
        <li>
          <Link to={'/home'}>Home</Link>
        </li>
      </ul>
    </header>
    <Outlet />
  </>
);
