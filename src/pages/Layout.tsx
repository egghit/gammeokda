import { ReactNode } from 'react';
import styled from 'styled-components';

import GNB from '@/components/common/GNB';
import DesktopPage from '@/pages/DesktopPage';

interface LayoutProps {
  router: ReactNode;
}

const Layout = ({ router }: LayoutProps) => {
  return (
    <MainContainer>
      <DesktopPage />
      <PageContainer>
        {router}
        <GNB />
      </PageContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PageContainer = styled.div`
  position: relative;
`;

export default Layout;
