import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import useGoogleAnalytics from '@/hooks/useGoogleAnalytics';
import Layout from '@/pages/Layout';
import Routes from '@/routes';
import GlobalStyle from '@/styles/reset';

import '@/styles/override.css';

const App = () => {
  useGoogleAnalytics();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
          <Layout router={<Routes />} />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
};

export default App;
