import DigitalMarketingBanner from "../../components/DigitalMarketing/DigitalMarketingBanner";
import DigitalMarketingServices from "../../components/DigitalMarketing/DigitalMarketingServices";
import GetInTouch from "../../components/GetInTouch";

export const metadata = {
  title: "Digital Marketing Services",

  description:
    "Revolutionize your online presence with our custom website solutions. Our digital marketing expertise ensures your site stands out from the competition, attracting more traffic and generating higher conversions. Trust our team to bring your brand to life online."
};

const page = () => {
  return (
    <main>
      <DigitalMarketingBanner />
      <DigitalMarketingServices />
      <GetInTouch />
    </main>
  );
};
export default page;
