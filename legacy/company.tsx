import Head from "next/head";
import CompanyBanner from "../components/Company/CompanyBanner";
import CompanySectionOne from "../components/Company/CompanySectionOne";
import CompanySectionTwo from "../components/Company/CompanySectionTwo";
import GetInTouch from "../components/GetInTouch";
import LocationSection from "../components/Locations";

const company = () => {
  return (
    <>
      <Head>
        <title>About | Athena Media</title>
        <meta
          name="description"
          content="Learn more about Athena Media, a leading provider of web development, digital marketing and advertising services."
        />
        <meta
          name="keywords"
          content="Athena Media, about, web development, digital marketing, advertising"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Athena Media" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="About | Athena Media" />
        <meta
          property="og:description"
          content="Learn more about Athena Media, a leading provider of digital marketing and advertising services."
        />
        <meta
          property="og:image"
          content="https://www.athenamedia.co.za/assets/images/analytics.jpeg"
        />
        <meta property="og:url" content="https://www.athenamedia.co.za/about" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Athena Media",
              url: "https://www.athenamedia.co.za/",
              logo: "https://www.athenamedia.co.za/images/analytics.jpeg",
              contactPoint: {
                "@type": "ContactPoint",

                contactType: "customer service",
                email: 'ziyanda@athenamedia.co.za'
              },
            }),
          }}
        />
      </Head>
      <CompanyBanner />
      <CompanySectionOne />

      <CompanySectionTwo />
      <GetInTouch />
    </>
  );
};
export default company;
