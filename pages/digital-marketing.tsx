import Head from "next/head";
import GetInTouch from "../components/GetInTouch";

import DigitalMarketingBanner from "../components/DigitalMarketing/DigitalMarketingBanner";
import DigitalMarketingServices from "../components/DigitalMarketing/DigitalMarketingServices";



const graphicDesign = () => {
  return <>
  <Head>
    <title>Graphic Design | Athena Media</title>
  </Head>
    <DigitalMarketingBanner />
    <DigitalMarketingServices />
    <GetInTouch />
  </>;
};
export default graphicDesign;
