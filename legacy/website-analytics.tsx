import Head from "next/head";
import AnalyticsServices from "../components/WebsiteAnalytics/AnalyticsServices";
import AnalyticsBanner from "../components/WebsiteAnalytics/AnalyticsBanner";
import GetInTouch from "../components/GetInTouch";

const websiteAnalytics = () => {
  return (
    <>
      <Head>
        <title>Web Analytics | Athena Media</title>
        <meta
          name="description"
          content="Athena Media offers expert web design and development services for businesses of all sizes. Contact us today to learn more."
        />
      <meta name="keywords" content="web analytics, website traffic, user behavior, user engagement, visitor tracking, visitor data, traffic analysis, audience insights, conversion tracking, funnel analysis, heatmaps, user flow"/>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Athena Media" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Web Analytics | Athena Media" />
        <meta
          property="og:description"
          content="Athena Media offers expert web design and development services for businesses of all sizes. Contact us today to learn more."
        />
        <meta
          property="og:image"
          content="https://www.athenamedia.co.za/images/logo.svg"
        />
        <meta
          property="og:url"
          content="https://www.athenamedia.co.za/web-analytics"
        />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              name: "Web Development",
              provider: {
                "@type": "Organization",
                name: "Athena Media",
                url: "https://www.athenamedia.co.za/",
                logo: "https://www.athenamedia.co.za/images/logo.svg",
              },
              serviceType: "Web design and development",
              areaServed: "South Africa",
              availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: "https://www.athenamedia.co.za/contact",
                servicePhone: "+27-81-755-1279",
              },
            }),
          }}
        />
      </Head>
      <AnalyticsBanner />
      <AnalyticsServices />
      <GetInTouch />
    </>
  );
};
export default websiteAnalytics;
