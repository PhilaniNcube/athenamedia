import ContactForm from "../../components/Contact/ContactForm";

export const metadata = {
  title: "Contact Us",

  description:
    "Get in touch with our expert team to discuss your custom website needs. We offer personalized web design, development, and maintenance services to help your business stand out online. Contact us today for a free consultation and let us bring your vision to life."
};

const page = () => {
  return (
    <main>
      <ContactForm />
    </main>
  );
};
export default page;
