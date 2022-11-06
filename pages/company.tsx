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
            <title>About Us</title>
           </Head>
           <CompanyBanner />
           <CompanySectionOne />
           <LocationSection />
           <CompanySectionTwo />
           <GetInTouch />
          </>
         )
};
export default company;
