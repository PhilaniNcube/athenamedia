import GetInTouch from "../../components/GetInTouch";
import AnalyticsBanner from "../../components/WebsiteAnalytics/AnalyticsBanner";
import AnalyticsServices from "../../components/WebsiteAnalytics/AnalyticsServices";

export const metadata = {
  title: "Website Analytics",

  description:
    "Gain valuable insights into your website's performance with our comprehensive analytics tools. Our team of experts will provide you with in-depth analysis and reports to help you make informed decisions and improve your website's user experience. Get real-time data on user behavior, site traffic, and conversion rates to optimize your online presence and stay ahead of the competition."
};

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
