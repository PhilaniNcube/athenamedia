import Head from "next/head";
import { Fragment } from "react";
import GetInTouch from "../components/GetInTouch";
import Banner from "../components/WebDesign/Banner";
import Projects from "../components/WebDesign/Projects";

const webDevelopment = () => {
  return (
    <Fragment>
      <Head>
        <title>Web Development | Athena Media</title>
        <meta
          name="description"
          content="Athena Media offers expert web design and development services for businesses of all sizes. Contact us today to learn more."
        />
        <meta
          name="keywords"
          content="web development, web design, website development, web development company"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Athena Media" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Web Development | Athena Media" />
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
          content="https://www.athenamedia.co.za/web-development"
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
      <Banner />
      <Projects />
      <GetInTouch />
    </Fragment>
  );
};
export default webDevelopment;
