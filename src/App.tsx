import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import CalendarPage from '@/pages/CalendarPage';
import DiaryListPage from '@/pages/DiaryListPage';
import DiaryWritePage from '@/pages/DiaryWritePage';
import IndexPage from '@/pages/IndexPage';
import Test from '@/pages/Test';
import GlobalStyle from '@/styles/reset';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  { path: 'calendar', element: <CalendarPage /> },
  { path: 'diarywrite', element: <DiaryWritePage /> },
  // TODO: test 페이지는 빌드 전, path 삭제해야 함 by.freya 230226
  { path: 'test', element: <Test /> },
  { path: 'diaries', element: <DiaryListPage /> },
]);

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
};

export default App;
