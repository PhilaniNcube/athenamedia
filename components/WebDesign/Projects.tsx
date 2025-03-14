import Image from "next/image";
import Link from "next/link";
import {ChevronRightIcon} from "@heroicons/react/24/outline";

const projects = [
  {
    title: "Digital Shopper",
    details: "The website is an ecommerce store with a wide array of products.",
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
    details: "This is a marketing website for a an investment advisory firm",
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
  // {
  //   title: "Script Beauty",
  //   details:
  //     "This is a marketing website for a service to be provided to social media influencers.",
  //   url: "https://www.scriptbeauty.co.za",
  //   image: "/images/scriptedbeauty_desktop.png",
  //   mobileImage: "/images/scriptedbeauty_mobile.png",
  // },
  {
    title: "Changemaker Network",
    details:
      "This is a website for a charitable organisation that focuses on the youth",
    url: "https://www.changemaker-network.org/",
    image: "/images/changemaker_desktop.png",
    mobileImage: "/images/changemaker_mobile.png",
  },
  {
    title: "Glambeads",
    details:
      "This is a website for a business that sells handmade beaded jewellery",
    url: "https://www.glambeads.co.za/",
    image: "/images/glambeads_desktop.png",
    mobileImage: "/images/glambeads_mobile.png",
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
      <div className="grid grid-cols-1 gap-6 px-4 mx-auto max-w-7xl lg:px-0 lg:grid-cols-3">
        {projects.map((item, i) => (
          <Link
            href={item.url}
            key={item.url}
            className="w-full overflow-hidden shadow rounded-xl"
          >
            <Image
              src={item.image}
              width={1911}
              height={876}
              alt="Project Image"
              className="object-cover w-full h-48 aspect-auto"
            />
            <div className="px-10 py-10 ">
              <p className="text-xl font-medium text-center uppercase text-peach">
                {item.title}
              </p>
              <p className="mt-2 text-base text-center">{item.details}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 mx-auto mt-12 max-w-7xl lg:px-0 lg:grid-cols-2">
        <div className="relative w-full overflow-hidden isolate rounded-2xl">
          <Image
            src="/images/analytics.jpeg"
            width={3000}
            height={2000}
            alt="Website Analytics"
            className="object-cover w-full aspect-video"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-slate-700/60">
            <h3 className="text-lg font-medium text-white uppercase md:text-2xl lg:text-3xl">
              Website Analytics
            </h3>
            <span className="flex items-center mt-3 space-x-2">
              <Link
                href="/website-analytics"
                className="text-sm text-white uppercase lg:text-lg hover:text-peach"
              >
                View Services
              </Link>
              <ChevronRightIcon className="w-6 h-6 lg:h-8 lg:w-8 text-peach" />
            </span>
          </div>
        </div>
        <div className="relative w-full overflow-hidden isolate rounded-2xl">
          <Image
            src="/images/digital-marketing.jpeg"
            width={3000}
            height={2000}
            alt="Graphic Design"
            className="object-cover w-full aspect-video"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-slate-700/60">
            <h3 className="text-lg font-medium text-white uppercase md:text-2xl lg:text-3xl">
              Digital Marketing
            </h3>
            <span className="flex items-center mt-3 space-x-2">
              <Link
                href="/digital-marketing"
                className="text-sm text-white uppercase lg:text-lg hover:text-peach"
              >
                View Services
              </Link>
              <ChevronRightIcon className="w-6 h-6 lg:h-8 lg:w-8 text-peach" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
