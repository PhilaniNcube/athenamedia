import CompanyBanner from "../../components/Company/CompanyBanner";
import CompanySectionOne from "../../components/Company/CompanySectionOne";
import CompanySectionTwo from "../../components/Company/CompanySectionTwo";
import GetInTouch from "../../components/GetInTouch";

export const metadata = {
  title: "Contact Us",

  description:
    "Discover Our Expertise in Crafting Custom Websites | Learn About Our Passion for Design, Development, and Innovation | Trust Our Experienced Team to Bring Your Vision to Life"
};

const page = () => {
  return (
    <main>
      <CompanyBanner />
      <CompanySectionOne />
      <CompanySectionTwo />
      <GetInTouch />
    </main>
  );
};
export default page;
