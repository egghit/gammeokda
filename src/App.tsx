import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import GNB from './components/common/GNB';
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

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/write" element={<DiaryWritePage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/diaries" element={<DiaryListPage />} />
            <Route path="/setting" element={<SettingPage />} />
          </Routes>
          <GNB />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
};

export default App;
