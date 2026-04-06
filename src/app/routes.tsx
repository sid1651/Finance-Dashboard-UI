import { createBrowserRouter } from 'react-router';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Insights from './pages/Insights';
import Settings from './pages/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'transactions', element: <Transactions /> },
      { path: 'insights', element: <Insights /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);