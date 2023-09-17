import Image from "next/image";
import Link from "next/link";
import {ChevronRightIcon} from "@heroicons/react/24/outline";

const projects = [
  {
    title: "Digital Shopper",
    details:
      "The website is an ecommerce store with a wide array of products.",
    url: "http://www.digitalshopper.co.za",
    image: "/images/digitalshopper-desktop.png",
    mobileImage: "/images/digitalshopper-mobile.png",
  },
  {
    title: "Cape Gadgets",
    details:
      "The website is an ecommerce store catering to university students in South Africa.",
    url: "http://www.capegadgets.co.za",
    image: "/images/capegadgets_desktop.png",
    mobileImage: "/images/capegadgets_mobile.png",
  },
  {
    title: "The Chapman",
    details:
      "The Chapman is a hotel and restaurant in Port Elizabeth. We developed this website as a replacement for their existing website to give it a fresh look.",
    url: "http://www.chapman.co.za",
    image: "/images/chapman_desktop.png",
    mobileImage: "/images/chapman_mobile.png",
  },
  {
    title: "Hotwater24",
    details:
      "This is a marketing website for a business supplying and installing gas geysers",
    url: "https://hotwater24.com",
    image: "/images/hotwater24_desktop.png",
    mobileImage: "/images/hotwater24_mobile.png",
  },
  {
    title: "Uhuru Impact",
    details:
      "This is a marketing website for a an investment advisory firm",
    url: "https://uhuruimpact.africa",
    image: "/images/uhuru_desktop.png",
    mobileImage: "/images/uhuru_mobile.png",
  },
  {
    title: "Solarquest",
    details:
      "This is a marketing & lead generation website for Solar Power & Battery Backup solutions",
    url: "https://solarquest.co.za",
    image: "/images/solarquest_desktop.png",
    mobileImage: "/images/solarquest_mobile.png",
  },
  {
    title: "African Expressions",
    details:
      "This is a website to show the different types of wool that a the distributor has for sale to retailers.",
    url: "https://african-expressions.vercel.app",
    image: "/images/africanexpressions_desktop.png",
    mobileImage: "/images/africanexpressions_mobile.png",
  },
  {
    title: "Script Beauty",
    details:
      "This is a marketing website for a service to be provided to social media influencers.",
    url: "https://www.scriptbeauty.co.za",
    image: "/images/scriptedbeauty_desktop.png",
    mobileImage: "/images/scriptedbeauty_mobile.png",
  },
  {
    title: "Art Gallery",
    details:
      "This is a website for a trendy Art Gallery so customers can can have an idea of the Gallery",
    url: "https://art-gallery-sage.vercel.app/",
    image: "/images/mobilegallery_desktop.png",
    mobileImage: "/images/mobilegallery_mobile.png",
  },
  {
    title: "Photosnap",
    details:
      "This is a website showing a photographers portfolio of work he has completed.",
    url: "https://photosnap-two.vercel.app/",
    image: "/images/photosnap_desktop.png",
    mobileImage: "/images/photosnap_mobile.png",
  },
  {
    title: "Popp Inn",
    details:
      "This is a website for an holiday accommodation provider in Johannesburg",
    url: "https://poppinn.co.za/",
    image: "/images/poppinn_desktop.png",
    mobileImage: "/images/poppinn_mobile.png",
  },
  {
    title: "Mudita Foundation",
    details:
      "This is a website for a new charitable organisation that focuses on the youth",
    url: "https://www.muditafoundationsa.co.za/",
    image: "/images/muditha_desktop.png",
    mobileImage: "/images/muditha_mobile.png",
  },
];

const Projects = () => {
  return (
    <section className="my-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((item, i) => (
          <Link
            href={item.url}
            key={i}
            className="w-full shadow rounded-xl overflow-hidden"
          >
            <Image
              src={item.image}
              width={1911}
              height={876}
              alt="Project Image"
              className="w-full aspect-auto object-cover"
            />
            <div className="px-10 py-10 ">
              <p className="text-xl text-peach text-center uppercase font-medium">
                {item.title}
              </p>
              <p className="mt-2 text-base text-center">{item.details}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full relative isolate rounded-2xl overflow-hidden">
          <Image
            src="/images/analytics.jpeg"
            width={3000}
            height={2000}
            alt="Website Analytics"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-slate-700/60 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-medium uppercase">
              Website Analytics
            </h3>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/website-analytics"
                className="text-white text-sm lg:text-lg uppercase hover:text-peach"
              >
                View Services
              </Link>
              <ChevronRightIcon className="h-6 w-6 lg:h-8 lg:w-8 text-peach" />
            </span>
          </div>
        </div>
        <div className="w-full relative isolate rounded-2xl overflow-hidden">
          <Image
            src="/images/digital-marketing.jpeg"
            width={3000}
            height={2000}
            alt="Graphic Design"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-slate-700/60 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-medium uppercase">
              Digital Marketing
            </h3>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/digital-marketing"
                className="text-white text-sm lg:text-lg uppercase hover:text-peach"
              >
                View Services
              </Link>
              <ChevronRightIcon className="h-6 w-6 lg:h-8 lg:w-8 text-peach" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
