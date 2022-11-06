import Image from "next/image";

const Locations = () => {
  return (
    <div className="max-w-7xl mx-auto px-4  pt-12">
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 mb-8 gap-4">
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center rounded-2xl bg-light-peach/30 p-10">
          <h2 className="text-2xl md:text-3xl text-peach font-medium">
            Canada
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="text-slate-700 text-md">
              <h4 className="font-medium">Our Central Office</h4>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="text-slate-700 text-md">
              <h4 className="font-medium">Contact</h4>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>
        <Image
          src="/assets/locations/desktop/canada.png"
          width={375}
          height={320}
          className="col-span-1 w-full object-cover rounded-2xl"
          alt="Canada"
        />
      </div>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3  mb-8 gap-4">
        {" "}
        <Image
          src="/assets/locations/desktop/australia.png"
          width={375}
          height={320}
          className="col-span-1 w-full object-cover rounded-2xl"
          alt="Australia"
        />
        <div className="col-span-1 lg:col-span-2 w-full  flex flex-col justify-center rounded-2xl bg-light-peach/30 p-10">
          <h2 className="text-2xl md:text-3xl text-peach font-medium">
            Australia
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="text-slate-700 text-md">
              <h4 className="font-medium">Designo AU Office</h4>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>
            <div className="text-slate-700 text-md">
              <h4 className="font-medium">Contact</h4>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 mb-8 gap-4">
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center rounded-2xl bg-light-peach/30 p-10">
          <h2 className="text-2xl md:text-3xl text-peach font-medium">
            United Kingdom
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="text-slate-700 text-md">
              <h4 className="font-medium">Designo UK Office</h4>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>
            <div className="text-slate-700 text-md">
              <h4 className="font-medium">Contact</h4>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </div>
        <Image
          src="/assets/locations/desktop/canada.png"
          width={375}
          height={320}
          className="col-span-1 w-full object-cover rounded-2xl"
          alt="Canada"
        />
      </div>
    </div>
  );
};
export default Locations;
