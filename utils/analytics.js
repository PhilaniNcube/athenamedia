import Analytics from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';

const GTM_CONTAINER_ID = "GTM-MTCLCZR";

const analytics = Analytics({
  app: 'athenamedia', // Call this whatever you like.
  plugins: [
    googleTagManager({
      containerId: GTM_CONTAINER_ID,
      enabled: true,
    }),
  ],
});

export default analytics;
