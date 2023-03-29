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
  gap: 2rem;
`;

const PageContainer = styled.div`
  position: relative;
`;

export default Layout;
