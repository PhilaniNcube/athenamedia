import ContactForm from "../../components/Contact/ContactForm";
import Script from "next/script";

export const metadata = {
  title: "Contact Us",

  description:
    "Get in touch with our expert team to discuss your custom website needs. We offer personalized web design, development, and maintenance services to help your business stand out online. Contact us today for a free consultation and let us bring your vision to life.",
};

const page = () => {
  return (
    <main>
      <Script id="contact-faq-jsonld" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why is my website not getting much traffic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Low website traffic can be caused by poor SEO optimization, lack of quality content, slow loading speeds, or inadequate marketing efforts. Our team can help identify and address these issues to increase your site's visibility."
                }
              },
              {
                "@type": "Question",
                "name": "How can I improve my website's search engine rankings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Improving search rankings involves keyword optimization, quality content creation, enhancing site speed, building backlinks, improving mobile responsiveness, and maintaining an active social media presence. We offer comprehensive SEO services to boost your online visibility."
                }
              },
              {
                "@type": "Question",
                "name": "What role does content play in driving traffic to my website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality content is crucial for attracting visitors. It helps with SEO, establishes your expertise, engages visitors, and encourages sharing. Our content strategy services can help you create valuable content that draws in and retains your target audience."
                }
              },
              {
                "@type": "Question",
                "name": "Is my website's loading speed affecting my traffic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Slow-loading websites experience higher bounce rates and lower search rankings. We can optimize your site's performance through image compression, code minification, browser caching, and other technical improvements to enhance user experience and retention."
                }
              },
              {
                "@type": "Question",
                "name": "How important is mobile optimization for website traffic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With over 50% of web traffic coming from mobile devices, mobile optimization is essential. Google also uses mobile-first indexing, meaning poorly optimized mobile sites will rank lower. We create responsive designs that perform excellently across all devices."
                }
              }
            ]
          }
        `}
      </Script>
      <ContactForm />
    </main>
  );
};
export default page;
