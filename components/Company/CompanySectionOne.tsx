import Image from "next/image";

const CompanySectionOne = () => {
  return (
    <section className="py-12 px-4 ">
      <div className="max-w-7xl rounded-2xl mx-auto  grid grid-cols-4 lg:grid-cols-5 overflow-hidden">
        <Image
          src="/assets/about/desktop/talent.jpg"
          width={476}
          height={640}
          alt="Talent"
          className="col-span-4 rounded-t-2xl md:rounded-t-none object-cover md:col-span-2 max-h-[55vh] w-full"
        />
        <div className="col-span-4 md:col-span-2 lg:col-span-3 bg-light-peach/30 flex flex-col justify-center p-8 md:p-16">
          <h2 className="text-peach text-xl md:text-3xl font-medium">
            World Class Talent
          </h2>
          <p className="text-slate-800 text-md mt-3">
            {" "}
            Our team of expert designers, developers, and marketers will work
            with you to understand your business goals and create a custom
            solution that will help you achieve them.
          </p>
          <p className="text-slate-800 text-md mt-3">
            With our focus on innovation, creativity, and customer satisfaction,
            you can trust us to deliver the best possible results for your
            business. Contact us today to learn more about how we can help you
            succeed online.
          </p>
        </div>
      </div>
    </section>
  );
};
export default CompanySectionOne;
