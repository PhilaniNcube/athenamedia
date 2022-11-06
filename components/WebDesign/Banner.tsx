import Image from "next/image";

const Banner = () => {
  return <header className="py-8">
    <div className="bg-peach relative isolate overflow-hidden rounded-2xl max-w-7xl min-h-[40vh] mx-auto px-4 flex items-center justify-center flex-col">
      <Image width={876} height={584} alt="Pattern" className="absolute inset-0 w-full h-full object-cover -z-10" src="/assets/web-design/desktop/bg-pattern-intro-web.svg" />
      <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-medium">Web Design</h1>
      <p className="text-white text-lg md:text-lg leading-7 text-center max-w-[50ch] mt-3">We build websites that serve as powerful marketing tools and bring memorable brand experiences</p>
    </div>
  </header>;
};
export default Banner;
