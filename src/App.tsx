import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import CalendarPage from '@/pages/CalendarPage';
import DiaryMainPage from '@/pages/DiaryMainPage';
import IndexPage from '@/pages/IndexPage';
import GlobalStyle from '@/styles/reset';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  { path: 'calendar', element: <CalendarPage /> },
  { path: 'diarymain', element: <DiaryMainPage /> },
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
