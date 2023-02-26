import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import CalendarPage from '@/pages/CalendarPage';
import DiaryWritePage from '@/pages/DiaryWritePage';
import IndexPage from '@/pages/IndexPage';
import GlobalStyle from '@/styles/reset';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  { path: 'calendar', element: <CalendarPage /> },
  { path: 'diarywrite', element: <DiaryWritePage /> },
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
