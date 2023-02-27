import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import CalendarPage from '@/pages/CalendarPage';
import DiaryListPage from '@/pages/DiaryListPage';
import DiaryWritePage from '@/pages/DiaryWritePage';
import IndexPage from '@/pages/IndexPage';
import SettingPage from '@/pages/SettingPage';
import SigninPage from '@/pages/SigninPage';
import SignupPage from '@/pages/SignupPage';
import Test from '@/pages/Test';
import GlobalStyle from '@/styles/reset';
import '@/styles/override.css';

const router = createBrowserRouter([
  { path: '/', element: <IndexPage /> },
  { path: 'signin', element: <SigninPage /> },
  { path: 'signup', element: <SignupPage /> },
  { path: 'calendar', element: <CalendarPage /> },
  { path: 'write', element: <DiaryWritePage /> },
  // TODO: test 페이지는 빌드 전, path 삭제해야 함 by.freya 230226
  { path: 'test', element: <Test /> },
  { path: 'diaries', element: <DiaryListPage /> },
  { path: 'setting', element: <SettingPage /> },
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
