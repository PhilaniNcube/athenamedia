import Head from "next/head";
import { Fragment } from "react";
import GetInTouch from "../components/GetInTouch";
import Banner from "../components/WebDesign/Banner";
import Projects from "../components/WebDesign/Projects";

const webDevelopment = () => {
  return <Fragment>
    <Head>
      <title>Web Design</title>
    </Head>
    <Banner />
    <Projects />
    <GetInTouch />
  </Fragment>;
};
export default webDevelopment;
