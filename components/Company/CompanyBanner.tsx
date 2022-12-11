import Image from "next/image";

const CompanyBanner = () => {
  return (
    <header className="py-12 px-4 ">
      <div className="max-w-7xl rounded-2xl md:px-0 overflow-hidden mx-auto relative isolate grid grid-cols-2 lg:grid-cols-5">
        <div className="p-8 md:p-12 rounded-2xl md:rounded-none col-span-2 lg:col-span-3 bg-peach flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-white font-medium">
            About Us
          </h1>
          <p className="text-md sm:pr-8 lg:pr-16 mt-4 text-white tracking-wider">
            At Athena Media, we believe that your website is the heart of your
            online presence. That's why we offer a full range of web design and
            development services to help you create a stunning, effective, and
            user-friendly website that will attract and engage your audience.

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
export default CompanyBanner;
