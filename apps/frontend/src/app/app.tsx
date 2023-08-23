import { routes } from './app.routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppChrome } from './Chrome';

const router = createBrowserRouter(routes);

export const App = () => (
  <AppChrome>
    <RouterProvider router={router} />
  </AppChrome>
);
