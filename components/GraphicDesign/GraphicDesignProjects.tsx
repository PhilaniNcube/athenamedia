import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Projects from "../WebDesign/Projects";

const designProjects = [
  {
    title: "Tim Brown",
    details: "A book cover designed for Tim Brown’s new release, ‘Change’",
    image: "/assets/graphic-design/desktop/change.jpg",
  },
  {
    title: "Boxed water",
    details: "A simple packaging concept made for Boxed Water",
    image: "/assets/graphic-design/desktop/boxed-water.jpg",
  },
  {
    title: "Science!",
    details: "A poster made in collaboration with the Federal Art Project",
    image: "/assets/graphic-design/desktop/science.jpg",
  },
];

const GraphicDesignProjects = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-2 xl:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {designProjects.map((project, i) => (
          <div key={i} className="w-full rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              width={700}
              height={640}
              alt={project.image}
              className="w-full object-cover"
            />
            <div className="w-full bg-light-peach/20 text-center p-8">
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
export default GraphicDesignProjects;
