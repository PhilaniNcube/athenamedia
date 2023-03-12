import GetInTouch from "../../components/GetInTouch";
import Locations from "../../components/Location/Locations";

export const metadata = {
  title: "Location",
  description:
    "Discover our top-notch custom website design services in South Africa. Our team of expert developers and designers will help you create a website that perfectly represents your brand and meets all your business needs. Contact us today to get started.",
};

const page = () => {
  return (
    <main>
      <Locations />
      <GetInTouch />
    </main>
  );
};
export default page;
