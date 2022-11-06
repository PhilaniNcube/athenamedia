import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "Express",
    details: "A multi-carrier shipping website for ecommerce businesses",
    image: "image-express.jpg",
  },
  {
    title: "Transfer",
    details:
      "Site for low-cost money transfers and sending money within seconds",
    image: "image-transfer.jpg",
  },
  {
    title: "Photon",
    details:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    image: "image-photon.jpg",
  },
  {
    title: "Builder",
    details: "Connects users with local contractors based on their location",
    image: "image-builder.jpg",
  },
  {
    title: "Blogr",
    details: "Blogr is a platform for creating an online blog or publication",
    image: "image-blogr.jpg",
  },
  {
    title: "Camp",
    details:
      "Get expert training in coding, data, design, and digital marketing",
    image: "image-camp.jpg",
  },
];

const Projects = () => {
  return (
    <section className="my-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-3 gap-6">
        {projects.map((item, i) => (
          <div key={i} className="w-full rounded-xl overflow-hidden">
            <Image
              src={`/assets/web-design/desktop/${item.image}`}
              width={700}
              height={640}
              alt="Project Image"
              className="w-full object-cover"
            />
            <div className="px-10 py-10 bg-light-peach/30">
              <p className="text-xl text-peach text-center uppercase font-medium">
                {item.title}
              </p>
              <p className="mt-2 text-base text-center">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 px-4 lg:px-0 grid grid-cols-2 gap-6">
        <div className="w-full relative isolate rounded-2xl overflow-hidden">
          <Image
            src="/assets/home/desktop/corporate.jpg"
            width={3000}
            height={2000}
            alt="Corporate Identity"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-slate-700/60 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-2xl md:text-3xl font-medium uppercase">
              Corporate Identity
            </h3>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/corporate-identity"
                className="text-white text-lg uppercase hover:text-peach"
              >
                View Projects
              </Link>
              <ChevronRightIcon className="h-8 w-8 text-peach" />
            </span>
          </div>
        </div>
        <div className="w-full relative isolate rounded-2xl overflow-hidden">
          <Image
            src="/assets/home/desktop/graphic-design.jpg"
            width={3000}
            height={2000}
            alt="Graphic Design"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-slate-700/60 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-2xl md:text-3xl font-medium uppercase">
              Graphic Design
            </h3>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/graphic-design"
                className="text-white text-lg uppercase hover:text-peach"
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
export default Projects;
