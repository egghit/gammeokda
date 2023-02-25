import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './App';
import Calendar from './components/CalendarPage/Calendar';

import GlobalStyle from '@/styles/reset';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: 'calendar', element: <Calendar /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <GlobalStyle />
    <RouterProvider router={router} />
  </RecoilRoot>,
);
