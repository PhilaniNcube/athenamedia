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
      href: "/web-development",
      name: "Web Development",
      active: router.asPath === "/web-development",
    },

    {
      id: 3,
      href: "/digital-marketing",
      name: "Marketing",
      active: router.asPath === "/digital-marketing",
    },

    {
      id: 4,
      href: "/website-analytics",
      name: "Analytics",
      active: router.asPath === "/website-analytics",
    },

    {
      id: 5,
      href: "/blog",
      name: "Blog",
      active: router.asPath === "/blog",
    },
    {
      id: 6,
      href: "/contact",
      name: "Contact",
      active: router.asPath === "/contact",
    },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-16">
        <div className="max-w-7xl py-2  border-b border-slate-100/30 mx-auto items-center lg:flex justify-between">
          <Link
            href="/"
            className="cursor-pointer font-bold uppercase text-xl text-peach"
          >
            {/* <Image
            className="w-48 object-cover"
            src="/assets/shared/desktop/logo-dark.png"
            alt="logo"
            width={404}
            height={54}
          /> */}
            Athena Media
          </Link>

          <nav className="flex flex-col lg:flex-row items-start lg:items-center mt-4 space-x-0 space-y-3 lg:space-y-3 lg:space-x-4">
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
                Port Elizabeth Central Office
              </h4>
              <h4 className="text-slate-200 text-xs md:text-sm">
                16 Strand Avenue, Humewood
              </h4>
              <h4 className="text-slate-200 text-xs md:text-sm">
                Port Elizabeth, 6001
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
          <div className="hidden flex-1 py-4  space-x-3 justify-end items-center">

          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
