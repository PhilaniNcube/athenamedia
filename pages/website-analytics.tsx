import Head from "next/head";
import AnalyticsServices from "../components/WebsiteAnalytics/AnalyticsServices";
import AnalyticsBanner from "../components/WebsiteAnalytics/AnalyticsBanner";
import GetInTouch from "../components/GetInTouch";

const websiteAnalytics = () => {
  return <>
          <Head>
             <title>Website Analytics</title>
          </Head>
          <AnalyticsBanner />
          <AnalyticsServices/>
          <GetInTouch />
         </>;
};
export default websiteAnalytics;
