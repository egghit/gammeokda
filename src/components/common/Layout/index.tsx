import { ReactNode } from 'react';
import styled from 'styled-components';

import DesktopCard from './DesktopCard';

import GNB from '@/components/common/GNB';

interface LayoutProps {
  router: ReactNode;
}

const Layout = ({ router }: LayoutProps) => {
  return (
    <MainContainer>
      <DesktopCard />
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
  gap: 5rem;
`;

const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: hidden;
`;

export default Layout;
