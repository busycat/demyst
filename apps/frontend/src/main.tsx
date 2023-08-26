import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AppChrome } from './app/app-chrome';
import { ErrorPage } from './app/error-page';
import { routes } from './app.routes';

const router = createBrowserRouter([
  {
    Component: AppChrome,
    path: '/',
    errorElement: <ErrorPage />,
    children: routes,
  },
]);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
