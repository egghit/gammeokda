import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import CalendarPage from '@/pages/CalendarPage';
import DiaryListPage from '@/pages/DiaryListPage';
import IndexPage from '@/pages/IndexPage';
import GlobalStyle from '@/styles/reset';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  { path: 'calendar', element: <CalendarPage /> },
  { path: 'diaries', element: <DiaryListPage /> },
]);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </>
  );
};

export default App;
