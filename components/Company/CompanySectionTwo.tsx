import Image from "next/image";

const CompanySectionTwo = () => {
  return (
    <header className="py-12 px-4">
      <div className="max-w-7xl rounded-2xl px-4 md:px-0 overflow-hidden mx-auto relative isolate grid grid-cols-2 lg:grid-cols-5">
        <div className="p-8 md:p-12 col-span-2 rounded-2xl md:rounded-none lg:col-span-3 bg-peach flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white font-medium">
            The real deal
          </h1>
          <p className="text-sm md:text-md sm:pr-8 lg:pr-16 mt-4 text-white tracking-wider">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="text-sm md:text-md pr-8 lg:pr-16 mt-4 text-white tracking-wider">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
        <Image
          src="/assets/about/desktop/image-about-hero.jpg"
          className="hidden w-full lg:flex col-span-2 object-cover h-full"
          width={3000}
          height={2000}
          alt="banner"
        />
      </div>
    </header>
  );
};
export default CompanySectionTwo;
