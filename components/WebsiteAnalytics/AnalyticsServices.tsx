import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Projects from "../WebDesign/Projects";

const analyticsServices = [
  {
    title: "Google Analytics",
    details:
      "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. It is the most widely used web analytics service on the internet",
    benefits: [
      "Understanding how users are finding and interacting with your website",
      "Identifying areas of your website that are performing well, and those that may need improvement",
      "Identifying trends and patterns in user behavior that can inform future decisions about your website",
      "Tracking the effectiveness of your marketing campaigns and social media efforts",
      "Providing insights that can help you optimize your website and improve the user experience",
    ],

    image: "/images/google-analytics.jpeg",
  },
  {
    title: "Google Search Console",
    details:
      "Google Search Console is a web-based platform offered by Google that allows webmasters and developers to monitor and maintain their website's presence on Google search",
    benefits: [
      "The ability to monitor and maintain your website's presence on Google search",
      "The ability to view detailed reports on how Google crawls and indexes your website",
      "The ability to troubleshoot any issues that may prevent your website from being properly indexed by Google",
      "The ability to submit sitemaps and individual URLs for crawling by Google",
      "The ability to receive alerts and notifications from Google about potential issues with your website",
    ],
    image: "/images/search-console.jpeg",
  },

  {
    title: "Facebook Business Manager",
    details:
      "Facebook Business Manager provides a central hub for managing all of your Facebook assets, including pages, ad accounts, and pixel tracking",
    benefits: [
      "The ability to manage multiple Facebook pages and ad accounts from a single platform",
      "The ability to grant access and assign roles to other team members, allowing you to manage your Facebook assets collaboratively",
      "The ability to track the performance of your Facebook advertising campaigns and make data-driven decisions about your marketing efforts",
      "The ability to set up custom audiences and target specific groups of people with your ads",
      "The ability to track the effectiveness of your ads and optimize them for maximum performance",
    ],
    image: "/images/facebook-business-manager.png",
  },
  {
    title: "Search Engine Optimisation",
    details:
      "Search engine optimization (SEO) is the process of improving the visibility and ranking of a website on search engines, such as Google.",
    benefits: [
      "Improved visibility and ranking on search engines, which can lead to more organic traffic to your website",
      "Greater relevance and authority in the eyes of search engines, which can help to improve the overall credibility of your website",
      "Better user experience, as SEO can help to ensure that your website is easy to find and navigate, and that it provides valuable and relevant information to users",
      "Increased revenue, as more organic traffic can lead to more leads and sales for your business",

    ],
    image: "/images/seo.jpeg",
  },
];

const AnalyticsServices = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-2 xl:px-0 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {analyticsServices.map((service, i) => (
          <div
            key={i}
            className="w-full rounded-2xl h-full flex flex-col overflow-hidden"
          >
            <Image
              src={service.image}
              width={1080}
              height={640}
              alt={service.title}
              className="w-full aspect-[6/3] lg:aspect-[6/4] object-cover"
            />
            <div className="w-full bg-light-peach/20 text-center p-8">
              <h3 className="text-peach tracking-wider font-medium uppercase text-2xl">
                {service.title}
              </h3>
              <p className="text-lg">{service.details}</p>

              <h4 className="mt-4 text-peach text-lg">
                Benefits of {service.title}
              </h4>

              <ul className="list-disc text-left">
                {service.benefits.map((item, i) => (
                  <li key={i} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 px-4 lg:px-0 grid grid-cols-2 gap-6">
        <div className="w-full relative isolate rounded-2xl overflow-hidden">
          <Image
            src="/images/digital-marketing.jpeg"
            width={3000}
            height={2000}
            alt="Digital Marketing"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-slate-700/60 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-sm sm:text-2xl md:text-3xl font-medium uppercase">
              Digital Marketing
            </h3>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/digital-marketing"
                className="text-white text-sm md:text-lg uppercase hover:text-peach"
              >
                View Services
              </Link>
              <ChevronRightIcon className="h-8 w-8 text-peach" />
            </span>
          </div>
        </div>
        <div className="w-full relative isolate rounded-2xl overflow-hidden">
          <Image
            src="/assets/home/desktop/web-design-large.jpg"
            width={3000}
            height={2000}
            alt="Web Design"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-slate-700/60 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-sm sm:text-2xl md:text-3xl font-medium uppercase">
              Web Design
            </h3>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/web-development"
                className="text-white text-sm md:text-lg uppercase hover:text-peach"
              >
                View Projects
              </Link>
              <ChevronRightIcon className="h-8 w-8 text-peach" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AnalyticsServices;
