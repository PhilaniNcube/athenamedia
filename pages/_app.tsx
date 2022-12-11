import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import analytics from '../utils/analytics'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    analytics.page();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp
