import Head from "next/head";
import GetInTouch from "../components/GetInTouch";

import DigitalMarketingBanner from "../components/DigitalMarketing/DigitalMarketingBanner";
import DigitalMarketingServices from "../components/DigitalMarketing/DigitalMarketingServices";



const graphicDesign = () => {
  return (
    <>
      <Head>
        <title>Digital Marketing | Athena Media</title>
        <meta
          name="description"
          content="Our digital marketing agency specializes in a range of services, including SEO, content marketing, social media marketing, and PPC advertising. We help businesses increase their online presence and reach their target audience effectively."
        />
        <meta
          name="keywords"
          content="digital marketing, online advertising, SEO, search engine optimization, content marketing, social media marketing, PPC, pay-per-click, email marketing, inbound marketing, digital strategy"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Athena Media" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Digital Marketing | Athena Media" />
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
          content="https://www.athenamedia.co.za/digital-marketing"
        />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Service",
              name: "Digital Marketing",
              provider: {
                "@type": "Organization",
                name: "Athena Media",
                url: "https://www.athenamedia.co.za/",
                logo: "https://www.athenamedia.co.za/images/logo.svg",
              },
              serviceType: "Web design and digital marketing",
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
      <DigitalMarketingBanner />
      <DigitalMarketingServices />
      <GetInTouch />
    </>
  );
};
export default graphicDesign;
