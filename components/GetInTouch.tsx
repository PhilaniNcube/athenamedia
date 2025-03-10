import Link from "next/link";
import { LightButton } from "./Buttons/Button";

const GetInTouch = () => {
  return (
    <section className="px-4 mt-8">
      <div className="bg-peach max-w-7xl mx-auto rounded-2xl flex flex-wrap items-center justify-between p-10 overflow-hidden min-h-[30vh] translate-y-14 shadow-md shadow-peach/20 relative isolate">
        <img
          src="/assets/shared/desktop/bg-pattern-three-circles.svg"
          className="absolute top-0 right-0 -z-10"
          alt="Background Pattern"
        />
        <div>
          <h2 className="text-2xl font-medium text-white md:text-3xl">
            Let's talk about <br />
            your project
          </h2>
          <p className="text-base tracking-wide text-white">
            Ready to take it to the next level? Contact us today and find out
            how <br />
            our expertise can help your business grow.
          </p>
        </div>
        <Link href="/contact" className="pt-4">
          <LightButton>Get In Touch</LightButton>
        </Link>
      </div>
    </section>
  );
};
export default GetInTouch;
