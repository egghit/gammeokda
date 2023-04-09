import { Route, Routes as ReactRoutes } from 'react-router-dom';

import CalendarPage from '@/pages/CalendarPage';
import DiaryListPage from '@/pages/DiaryListPage';
import DiaryWritePage from '@/pages/DiaryWritePage';
import IndexPage from '@/pages/IndexPage';
import SettingPage from '@/pages/SettingPage';
import SigninPage from '@/pages/SigninPage';
import SignupPage from '@/pages/SignupPage';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/write" element={<DiaryWritePage />} />
      <Route path="/diaries" element={<DiaryListPage />} />
      <Route path="/setting" element={<SettingPage />} />
    </ReactRoutes>
  );
};

export default Routes;
