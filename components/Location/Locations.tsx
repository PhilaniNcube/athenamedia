import Image from "next/image";

const Locations = () => {
  return (
    <div className="max-w-7xl mx-auto px-4  pt-12">
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 mb-8 gap-4">
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center rounded-2xl bg-light-peach/30 p-10">
          <h2 className="text-2xl md:text-3xl text-peach font-medium">
            Port Elizabeth
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="text-slate-700 text-md">
              <h4 className="font-medium">Our Central Office</h4>
              <p>16 Strand Avenue, Humewood</p>
              <p>Port Elizabeth, 6001</p>
            </div>
            <div className="text-slate-700 text-md">
              <h4 className="font-medium">Contact</h4>

              <p>M : ziyanda@athenamedia.co.za</p>
              <p>M : info@athenamedia.co.za</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3  mb-8 gap-4">
        {" "}
        <div className="col-span-1 lg:col-span-2 w-full  flex flex-col justify-center rounded-2xl bg-light-peach/30 p-10">
          <h2 className="text-2xl md:text-3xl text-peach font-medium">
            Cape Town
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="text-slate-700 text-md">
              <h4 className="font-medium">Cape Town Representative</h4>
              <p>Vusa Ncube</p>
              <p>Business Development</p>
            </div>
            <div className="text-slate-700 text-md">
              <h4 className="font-medium">Contact</h4>

              <p>M : vusa@diversivest.co.za</p>
              <p>M : info@athenamedia.co.za</p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default Locations;
