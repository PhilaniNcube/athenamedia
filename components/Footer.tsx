import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  RiFacebookBoxFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiInstagramLine,
} from "react-icons/ri";

const Footer = () => {

  const router = useRouter();

  const links = [
    {
      id: 1,
      href: "/company",
      name: "Our Company",
      active: router.asPath === "/company",
    },
    {
      id: 2,
      href: "/location",
      name: "Locations",
      active: router.asPath === "/location",
    },
    {
      id: 3,
      href: "/contact",
      name: "Contact",
      active: router.asPath === "/contact",
    },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-16">
        <div className="max-w-7xl py-2  border-b border-slate-100/30 mx-auto items-center lg:flex justify-between">
          <Image
            className="w-48 my-4 object-cover"
            src="/assets/shared/desktop/logo-light.png"
            alt="logo"
            width={404}
            height={54}
          />

          <nav className="flex items-center space-x-4">
            {links.map((item) => (
              <Link
                key={item.id}
                className={`${
                  item.active ? "text-peach" : "text-slate-50"
                } hover:text-peach text-lg uppercase`}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 w-full  flex flex-col md:flex-wrap md:items-center">
          <div className="flex-1 flex w-full justify-between">
            <div>
              <h4 className="text-slate-200 text-xs md:text-sm font-bold">
                Designo Central Office
              </h4>
              <h4 className="text-slate-200 text-xs md:text-sm">
                3886 Wellington Street
              </h4>
              <h4 className="text-slate-200 text-xs md:text-sm">
                Toronto, Ontario M9C 3J5
              </h4>
            </div>
            <div>
              <h4 className="text-slate-200 text-xs md:text-sm font-bold">
                Contact Us (Main Office)
              </h4>
              <h4 className="text-slate-200 text-xs md:text-sm">
                P +27 81 755 1279
              </h4>
              <h4 className="text-slate-200 text-xs md:text-sm">
                E info@atenamedia.co.za
              </h4>
            </div>
          </div>
          <div className="flex-1 py-4 flex space-x-3 justify-end items-center">
            <RiFacebookBoxFill className="h-6 w-6 text-peach hover:text-light-peach" />
            <RiYoutubeFill className="h-6 w-6 text-peach hover:text-light-peach" />
            <RiTwitterFill className="h-6 w-6 text-peach hover:text-light-peach" />
            <RiInstagramLine className="h-6 w-6 text-peach hover:text-light-peach" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
