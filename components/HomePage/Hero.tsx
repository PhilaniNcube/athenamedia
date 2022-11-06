import Image from "next/image";
import Link from "next/link";
import { LightButton } from "../Buttons/Button";

const Hero = () => {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 bg-peach relative overflow-hidden rounded-3xl min-h-[70vh] max-h-[70vh]">
        <svg
          className="absolute top-0 right-0 bottom-0 h-full"
          width="640"
          height="639"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
              <stop stop-color="#5D0202" stop-opacity="0" offset="0%" />
              <stop stop-color="#5D0202" stop-opacity=".498" offset="100%" />
            </linearGradient>
          </defs>
          <circle
            fill="url(#a)"
            transform="matrix(0 -1 -1 0 640 640)"
            cx="320"
            cy="320"
            r="320"
            fillRule="evenodd"
            opacity=".309"
          />
        </svg>
        <div className="w-full h-full grid grid-cols-2">
          <div className="col-span-1 flex flex-col justify-center h-[70vh] pl-3 ">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl">
              Cutting-Edge custom designs and digital branding solutions
            </h1>
            <p className="text-white mb-4 text-xl tracking-wide mt-4 pr-10">
              We are experienced in creating fully responsive websites to the
              latest in technologies in web development used by the largest
              brands on the planet. We also craft engaging brand experiences.
              Find out more about our services.
            </p>
            <Link href="#more">
              <LightButton>Learn More</LightButton>
            </Link>
          </div>
          <div className="flex justify-center col-span-1">
            <Image
              width={624}
              height={913}
              alt="Hero Image"
              src="/assets/home/desktop/hero-phone.png"
              className="w-[67vh] object-center object-cover col-span-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
