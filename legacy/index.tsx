import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Hero from '../components/HomePage/Hero'
import SectionOne from '../components/HomePage/SectionOne'
import GetInTouch from '../components/GetInTouch'
import SectionTwo from '../components/HomePage/SectionTwo'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Athena Media | Custom Web Design and Development Services</title>
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
        <meta
          property="og:title"
          content="Athena Media | Custom Web Design and Development Services"
        />
        <meta
          property="og:description"
          content="Athena Media offers expert web design and development services for businesses of all sizes. Contact us today to learn more."
        />
        <meta
          property="og:image"
          content="https://www.athenamedia.co.za/images/seo.jpeg"
        />
        <meta property="og:url" content="https://www.athenamedia.co.za"></meta>
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Athena Media",
              url: "https://www.athenamedia.co.za",
              logo: "https://www.athenamedia.co.za/images/seo.jpeg",
              contactPoint: {
                "@type": "ContactPoint",
               email: 'ziyanda@athenamedia.co.za',
                contactType: "customer service",
              },
            }),
          }}
        />
      </Head>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <GetInTouch />
    </Fragment>
  );
}

export default Home
