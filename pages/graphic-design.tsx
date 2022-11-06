import Head from "next/head";
import GetInTouch from "../components/GetInTouch";
import GraphicDesignBanner from "../components/GraphicDesign/GraphicDesignBanner";
import GraphicDesignProjects from "../components/GraphicDesign/GraphicDesignProjects";



const graphicDesign = () => {
  return <>
  <Head>
    <title>Graphic Design | Athena Media</title>
  </Head>
    <GraphicDesignBanner />
    <GraphicDesignProjects />
    <GetInTouch />
  </>;
};
export default graphicDesign;
