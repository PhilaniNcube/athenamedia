import GetInTouch from "../../components/GetInTouch";
import Banner from "../../components/WebDesign/Banner";
import Projects from "../../components/WebDesign/Projects";

export const metadata = {
  title: "Website Development",

  description:
    "Expert website development services for businesses of all sizes. Our team of experienced developers creates custom websites tailored to your specific needs. From design to launch, we ensure your website is fully optimized for maximum performance and user engagement. Contact us today to bring your vision to life."
};

const page = () => {
  return (
    <main>
      <Banner />
      <Projects />
      <GetInTouch />
    </main>
  );
};
export default page;
