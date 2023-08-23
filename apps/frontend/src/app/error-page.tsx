import { FC } from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage: FC = () => (
  <>
    <h1>Error</h1>
    <Link to={'/'}>Home</Link>
  </>
);
