import Head from "next/head";
import GetInTouch from "../components/GetInTouch";
import Locations from "../components/Location/Locations";

const location = () => {
  return (
          <>
           <Head>
             <title>Locations</title>
           </Head>
           <Locations />
           <GetInTouch />
          </>
          )
};
export default location;
