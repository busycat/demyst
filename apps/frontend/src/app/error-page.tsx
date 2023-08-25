import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  message?: string;
}
export const ErrorPage: FC<Props> = ({ message }) => (
  <>
    <h1>{message ?? 'Error'}</h1>
    <Link to={'/'}>Home</Link>
  </>
);
