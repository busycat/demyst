import { RouteObject } from 'react-router-dom';

// export type RouteDef = {
//   title: string;
//   component: ReactNode;
//   url: string;
//   exact: boolean;
// };
export const routes: RouteObject[] = [
  {
    Component: () => <>Hello</>,
    path: '',
  },
];
