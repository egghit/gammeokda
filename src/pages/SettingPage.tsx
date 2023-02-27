import { Container } from './index.style';

import Setting from '@/components/SettingPage/Setting';

const SettingPage = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
      }}
    >
      <Setting />
    </Container>
  );
};

export default SettingPage;
