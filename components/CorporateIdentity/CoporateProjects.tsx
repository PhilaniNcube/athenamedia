import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Projects from "../WebDesign/Projects";

const designProjects = [
  {
    title: "Airfilter",
    details:
      "Solving the problem of poor indoor air quality by filtering the air",
    image: "/assets/corporate/desktop/image-airfilter.jpg",
  },
  {
    title: "Eyecam",
    details:
      "Product that lets you edit your favorite photos and videos at any time",
    image: "/assets/corporate/desktop/image-eyecam.jpg",
  },
  {
    title: "Faceit",
    details: "Get to meet your favorite internet superstar with the faceit app",
    image: "/assets/corporate/desktop/image-faceit.jpg",
  },
  {
    title: "Todo",
    details: "A todo app that features cloud sync with light and dark mode",
    image: "/assets/corporate/desktop/image-todo.jpg",
  },
  {
    title: "Loopstudios",
    details: "A VR experience app made for Loopstudios",
    image: "/assets/corporate/desktop/image-loopstudios.jpg",
  },
];

const CorporateProjects = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-2 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {designProjects.map((project, i) => (
          <div key={i} className="w-full rounded-2xl flex flex-col overflow-hidden">
            <Image
              src={project.image}
              width={700}
              height={640}
              alt={project.image}
              className="w-full object-cover"
            />
            <div className="w-full bg-light-peach/20 text-center p-8 h-36">
              <h3 className="text-peach tracking-wider font-medium uppercase text-2xl">
                {project.title}
              </h3>
              <p className="text-lg">{project.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 px-4 lg:px-0 grid grid-cols-2 gap-6">
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
        <div className="w-full relative isolate rounded-2xl overflow-hidden">
          <Image
            src="/assets/home/desktop/web-design-large.jpg"
            width={3000}
            height={2000}
            alt="Web Design"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-slate-700/60 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-2xl md:text-3xl font-medium uppercase">
              Web Design
            </h3>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/web-development"
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
export default CorporateProjects;
