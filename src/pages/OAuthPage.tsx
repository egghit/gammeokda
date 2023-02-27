import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OAuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const authenticate = async () => {
    // await signInWithCustomToken(auth, token);
  };

  useEffect(() => {
    const search = new URLSearchParams(location.search);
    const code = search.get('code');

    if (!code) {
      navigate('/signin');
      return;
    }

    authenticate();
  }, []);

  return <div>OAuthPage</div>;
};

export default OAuthPage;
