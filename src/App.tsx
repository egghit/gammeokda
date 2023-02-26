import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import CalendarPage from '@/pages/CalendarPage';
import DiaryListPage from '@/pages/DiaryListPage';
import IndexPage from '@/pages/IndexPage';
import Test from '@/pages/Test';
import GlobalStyle from '@/styles/reset';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  { path: 'calendar', element: <CalendarPage /> },
  // TODO: test 페이지는 빌드 전, path 삭제해야 함 by.freya 230226
  { path: 'test', element: <Test /> },
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
