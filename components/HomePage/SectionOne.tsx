import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const SectionOne = () => {
  return (
    <section className="px-4 my-6">
      <div className="hidden grid-cols-2 grid-rows-2 gap-4 mx-auto max-w-7xl md:grid">
        <div className="relative w-full col-span-1 row-span-2 overflow-hidden isolate rounded-2xl">
          <Image
            src="/assets/home/desktop/web-design-large.jpg"
            width={541}
            height={640}
            alt="Web Design"
            quality={70}
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800/60">
            <h2 className="text-xl font-medium text-white uppercase md:text-2xl lg:text-4xl">
              Web Design
            </h2>
            <span className="flex items-center mt-3 space-x-2">
              <Link
                href="/web-development"
                className="text-white uppercase text-md md:text-lg hover:text-peach"
              >
                View Projects
              </Link>
              <ChevronRightIcon className="w-8 h-8 text-peach" />
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full col-span-1 col-start-2 col-end-2 row-start-1 row-end-2 overflow-hidden isolate rounded-2xl">
          <Image
            src="/images/analytics.jpeg"
            width={1500}
            height={844}
            alt="Website Analytics"
            quality={70}
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800/60">
            <h2 className="text-xl font-medium text-white uppercase md:text-2xl lg:text-4xl">
              Website Analytics
            </h2>
            <span className="flex items-center mt-3 space-x-2">
              <Link
                href="/website-analytics"
                className="text-white uppercase text-md md:text-lg hover:text-peach"
              >
                View Services
              </Link>
              <ChevronRightIcon className="w-8 h-8 text-peach" />
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full col-span-1 col-start-2 col-end-2 row-start-2 row-end-3 overflow-hidden isolate rounded-2xl">
          <Image
            src="/images/digital-marketing.jpeg"
            width={1500}
            height={1000}
            alt="Digital Marketing"
            quality={70}
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800/60">
            <h2 className="text-xl font-medium text-white uppercase md:text-2xl lg:text-4xl">
              Digital Marketing
            </h2>
            <span className="flex items-center mt-3 space-x-2">
              <Link
                href="/digital-marketing"
                className="text-white uppercase text-md md:text-lg hover:text-peach"
              >
                View Services
              </Link>
              <ChevronRightIcon className="w-8 h-8 text-peach" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:hidden">
        {" "}
        <div className="relative flex items-center justify-center w-full col-span-1 col-start-2 col-end-2 row-start-2 row-end-3 overflow-hidden isolate rounded-2xl">
          <Image
            src="/images/digital-marketing.jpeg"
            width={1500}
            height={1000}
            alt="Digital Marketing"
            quality={70}
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800/60">
            <h2 className="text-xl font-medium text-white uppercase md:text-2xl lg:text-4xl">
              Digital Marketing
            </h2>
            <span className="flex items-center mt-3 space-x-2">
              <Link
                href="/digital-marketing"
                className="text-white uppercase text-md md:text-lg hover:text-peach"
              >
                View Services
              </Link>
              <ChevronRightIcon className="w-8 h-8 text-peach" />
            </span>
          </div>
        </div>{" "}
        <div className="relative w-full col-span-1 row-span-2 overflow-hidden isolate rounded-2xl">
          <Image
            src="/assets/home/desktop/web-design-large.jpg"
            width={541}
            height={640}
            alt="Web Design"
            quality={70}
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800/60">
            <h2 className="text-xl font-medium text-white uppercase md:text-2xl lg:text-4xl">
              Web Design
            </h2>
            <span className="flex items-center mt-3 space-x-2">
              <Link
                href="/web-development"
                className="text-white uppercase text-md md:text-lg hover:text-peach"
              >
                View Projects
              </Link>
              <ChevronRightIcon className="w-8 h-8 text-peach" />
            </span>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full col-span-1 col-start-2 col-end-2 row-start-1 row-end-2 overflow-hidden isolate rounded-2xl">
          <Image
            src="/images/analytics.jpeg"
            width={1500}
            height={844}
            alt="Website Analytics"
            quality={70}
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800/60">
            <h2 className="text-xl font-medium text-white uppercase md:text-2xl lg:text-4xl">
              Website Analytics
            </h2>
            <span className="flex items-center mt-3 space-x-2">
              <Link
                href="/website-analytics"
                className="text-white uppercase text-md md:text-lg hover:text-peach"
              >
                View Services
              </Link>
              <ChevronRightIcon className="w-8 h-8 text-peach" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionOne;
