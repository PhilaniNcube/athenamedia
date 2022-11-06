import Link from "next/link";
import { Button } from "./Buttons/Button";

const locations = [
  {
    title: "Canada",
    image: "/assets/shared/desktop/illustration-canada.svg",
  },
  {
    title: "Australia",
    image: "/assets/shared/desktop/illustration-australia.svg",
  },
  {
    title: "United Kingdom",
    image: "/assets/shared/desktop/illustration-united-kingdom.svg",
  },
];

const LocationSection = () => {
  return (
    <>
      <div className=" px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 py-20">
        {locations.map((item, i) => (
          <div key={i} className="w-full">
            <div
              key={i}
              className="w-full aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center rounded-full"
            >
              <img src={item.image} className="w-full object-cover" />
            </div>
            <h4 className="mt-4 text-center text-2xl text-slate-800 font-medium uppercase">
              {item.title}
            </h4>
            <div className="flex justify-center mt-8">
              <Link href="/location">
                <Button>See Location</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default LocationSection;
