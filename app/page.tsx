import GetInTouch from "../components/GetInTouch";
import Hero from "../components/HomePage/Hero";
import SectionOne from "../components/HomePage/SectionOne";
import SectionTwo from "../components/HomePage/SectionTwo";

const page = () => {
  return (
    <main>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <GetInTouch />
    </main>
  );
};
export default page;
