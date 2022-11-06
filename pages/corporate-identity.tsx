import Head from "next/head";
import CorporateProjects from "../components/CorporateIdentity/CoporateProjects";
import CorporateBanner from "../components/CorporateIdentity/CorporateBanner";
import GetInTouch from "../components/GetInTouch";

const corporateIdentity = () => {
  return <>
          <Head>
             <title>Corporate Identity</title>
          </Head>
          <CorporateBanner />
          <CorporateProjects/>
          <GetInTouch />
         </>;
};
export default corporateIdentity;
