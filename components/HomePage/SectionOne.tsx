import Image from 'next/image'
import Link from 'next/link';
import {ChevronRightIcon} from "@heroicons/react/24/outline"

const SectionOne = () => {
  return (
    <section className="my-6 px-4">
      <div className="max-w-7xl hidden mx-auto md:grid grid-rows-2 grid-cols-2 gap-4">
        <div className="col-span-1  row-span-2 relative isolate w-full rounded-2xl overflow-hidden">
          <Image
            src="/assets/home/desktop/web-design-large.jpg"
            width={541}
            height={640}
            alt="Web Design"
            quality={100}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-gray-800/60 items-center">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl uppercase font-medium">
              Web Design
            </h2>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/web-development"
                className="text-white text-md md:text-lg uppercase hover:text-peach"
              >
                View Projects
              </Link>
              <ChevronRightIcon className="h-8 w-8 text-peach" />
            </span>
          </div>
        </div>

        <div className="w-full col-span-1 relative isolate overflow-hidden row-start-1 row-end-2 rounded-2xl col-start-2 col-end-2 flex items-center justify-center">
          <Image
            src="/assets/home/desktop/corporate.jpg"
            width={3000}
            height={2000}
            alt="Graphic Design"
            quality={100}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-800/60">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl uppercase font-medium">
              Corporate Identity
            </h2>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/corporate-identity"
                className="text-white text-md md:text-lg uppercase hover:text-peach"
              >
                View Projects
              </Link>
              <ChevronRightIcon className="h-8 w-8 text-peach" />
            </span>
          </div>
        </div>

        <div className="w-full col-span-1 relative isolate overflow-hidden row-start-2 row-end-3 rounded-2xl col-start-2 col-end-2 flex items-center justify-center">
          <Image
            src="/assets/home/desktop/graphic-design.jpg"
            width={541}
            height={308}
            alt="Graphic Design"
            quality={100}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-800/60">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl uppercase font-medium">
              Graphic Design
            </h2>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/graphic-design"
                className="text-white text-md md:text-lg uppercase hover:text-peach"
              >
                View Projects
              </Link>
              <ChevronRightIcon className="h-8 w-8 text-peach" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex md:hidden flex-col gap-4">
        {" "}
        <div className="w-full col-span-1 relative isolate overflow-hidden row-start-2 row-end-3 rounded-2xl col-start-2 col-end-2 flex items-center justify-center">
          <Image
            src="/assets/home/desktop/graphic-design.jpg"
            width={541}
            height={308}
            alt="Graphic Design"
            quality={100}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-800/60">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl uppercase font-medium">
              Graphic Design
            </h2>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/graphic-design"
                className="text-white text-md md:text-lg uppercase hover:text-peach"
              >
                View Projects
              </Link>
              <ChevronRightIcon className="h-8 w-8 text-peach" />
            </span>
          </div>
        </div>{" "}
        <div className="col-span-1  row-span-2 relative isolate w-full rounded-2xl overflow-hidden">
          <Image
            src="/assets/home/desktop/web-design-large.jpg"
            width={541}
            height={640}
            alt="Web Design"
            quality={100}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-gray-800/60 items-center">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl uppercase font-medium">
              Web Design
            </h2>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/web-development"
                className="text-white text-md md:text-lg uppercase hover:text-peach"
              >
                View Projects
              </Link>
              <ChevronRightIcon className="h-8 w-8 text-peach" />
            </span>
          </div>
        </div>
        <div className="w-full col-span-1 relative isolate overflow-hidden row-start-1 row-end-2 rounded-2xl col-start-2 col-end-2 flex items-center justify-center">
          <Image
            src="/assets/home/desktop/corporate.jpg"
            width={3000}
            height={2000}
            alt="Graphic Design"
            quality={100}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-800/60">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl uppercase font-medium">
              Corporate Identity
            </h2>
            <span className="flex items-center space-x-2 mt-3">
              <Link
                href="/corporate-identity"
                className="text-white text-md md:text-lg uppercase hover:text-peach"
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
export default SectionOne;
