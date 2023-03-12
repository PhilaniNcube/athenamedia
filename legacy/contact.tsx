import Head from "next/head";
import ContactForm from "../components/Contact/ContactForm";
import LocationSection from "../components/Locations";

const contact = () => {
  return (
         <>
           <Head>
            <title>Contact Us</title>
           </Head>
           <ContactForm />

         </>
         )
};
export default contact;
