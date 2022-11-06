const SectionTwo = () => {
  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-24">
        <div className="w-full">
          <div className="rounded-full w-full aspect-square bg-slate-200">
            <img
              src="/assets/home/desktop/passionate.svg"
              className="w-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-center tracking-wider text-slate-800 text-2xl uppercase">
              Passionate
            </h4>
            <p className="text-base text-slate-700 leading-7 text-center">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-full w-full aspect-square bg-slate-200">
            <img
              src="/assets/home/desktop/resourceful.svg"
              className="w-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-center tracking-wider text-slate-800 text-2xl uppercase">
              Resourceful
            </h4>
            <p className="text-base text-slate-700 leading-7 text-center">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-full w-full aspect-square bg-slate-200">
            <img
              src="/assets/home/desktop/friendly.svg"
              className="w-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-center tracking-wider text-slate-800 text-2xl uppercase">
              Friendly
            </h4>
            <p className="text-base text-slate-700 leading-7 text-center">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionTwo;
