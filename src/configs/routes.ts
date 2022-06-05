import { Dashboard } from '@pages/Dashboard';
import { Report } from '@pages/Report';
import { Schedule } from '@pages/Schedule';

export const routesConfig: Array<{ path: string; element: () => JSX.Element }> =
  [
    {
      path: '/dashboard',
      element: Dashboard,
    },
    {
      path: '/schedule',
      element: Schedule,
    },
    {
      path: '/report',
      element: Report,
    },
  ];
