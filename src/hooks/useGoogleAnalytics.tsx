import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

import env from '@/config';

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (env.GOOGLE_ANALYTICS_TRACKING_ID) {
      ReactGA.initialize(env.GOOGLE_ANALYTICS_TRACKING_ID);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export default RouteChangeTracker;
