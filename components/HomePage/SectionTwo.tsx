const SectionTwo = () => {
  return (
    <section className="my-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-24">
        <div className="w-full">
          <div className="rounded-full w-full aspect-square bg-slate-200">
            <img
              src="/assets/home/desktop/passionate.svg"
              className="w-full object-cover"
              alt="Passionate"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-center tracking-wider text-slate-800 text-2xl uppercase">
              Experienced & Professional
            </h4>
            <p className="text-base text-slate-700 leading-7 text-center">
              Our team of experienced web designers and developers have a proven
              track record of creating high-quality, effective websites for a
              wide range of businesses and organizations. We are dedicated to
              providing exceptional customer service and support, and will work
              closely with you to understand your unique needs and goals.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-full w-full aspect-square bg-slate-200">
            <img
              src="/assets/home/desktop/resourceful.svg"
              className="w-full object-cover"
              alt="Resourceful"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-center tracking-wider text-slate-800 text-2xl uppercase">
              Customized and Flexible Solutions
            </h4>
            <p className="text-base text-slate-700 leading-7 text-center">
              We understand that every business is different, and we pride
              ourselves on our ability to create customized website solutions
              that meet the specific needs and goals of our clients. We are
              flexible and adaptable, and will work with you to ensure that your
              website is not only beautiful and functional, but also uniquely
              suited to your business.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-full w-full aspect-square bg-slate-200">
            <img
              src="/assets/home/desktop/friendly.svg"
              className="w-full object-cover"
              alt="Friendly"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-center tracking-wider text-slate-800 text-2xl uppercase">
              Ongoing Support and Maintenance
            </h4>
            <p className="text-base text-slate-700 leading-7 text-center">
              Creating a successful website is not a one-time event, and we are
              committed to providing ongoing support and maintenance to ensure
              that your website continues to perform at its best. We offer a
              range of services, including regular updates and upgrades,
              technical support, and ongoing optimization to ensure that your
              website stays up-to-date and relevant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionTwo;
