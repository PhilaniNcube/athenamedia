import GetInTouch from "../../components/GetInTouch";
import AnalyticsBanner from "../../components/WebsiteAnalytics/AnalyticsBanner";
import AnalyticsServices from "../../components/WebsiteAnalytics/AnalyticsServices";

const page = () => {
  return (
    <main>
      <AnalyticsBanner />
      <AnalyticsServices />
      <GetInTouch />
    </main>
  );
};
export default page;
