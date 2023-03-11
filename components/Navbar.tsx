import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const router = useRouter()

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

    // {
    //   id: 5,
    //   href: "/blog",
    //   name: "Blog",
    //   active: router.asPath === "/blog",
    // },
    {
      id: 6,
      href: "/contact",
      name: "Contact",
      active: router.asPath === "/contact",
    },
  ];


  return (
    <header className="py-3">
      {/**Desktop Navigation**/}
      <div className="max-w-7xl py-2 hidden  mx-auto px-4 items-center md:flex  justify-between">
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

        <nav className="flex items-center space-x-4">
          {links.map((item) => (
            <Link
              key={item.id}
              className={`${
                item.active ? "text-peach" : "text-slate-800"
              } hover:text-peach text-lg uppercase`}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/***Mobile Nav */}
      <div className="py-8 md:hidden mx-auto px-4 items-center flex justify-between  overflow-hidden">
        <Link
          href="/"
          className="cursor-pointer uppercase text-xl text-peach font-bold"
        >
          {/* <Image
            className="w-36 object-cover"
            src="/assets/shared/desktop/logo-dark.png"
            alt="logo"
            width={404}
            height={54}
          /> */}
          Athena Media
        </Link>
        {open ? (
          <XMarkIcon
            onClick={() => setOpen(!open)}
            className="text-slate-900 h-8 w-8"
          />
        ) : (
          <Bars3Icon
            onClick={() => setOpen(!open)}
            className="text-slate-900 h-8 w-8"
          />
        )}

        {open && (
          <div className="absolute inset-0 bg-slate-50 z-20 h-[50vh]">
            <div className="py-8 md:hidden mx-auto px-4 items-center flex justify-between  overflow-hidden">
              <Link
                href="/"
                className="cursor-pointer uppercase text-xl text-peach font-bold"
                onClick={() => setOpen(!open)}
              >
                {/* <Image
            className="w-36 object-cover"
            src="/assets/shared/desktop/logo-dark.png"
            alt="logo"
            width={404}
            height={54}
          /> */}
                Athena Media
              </Link>
              {open ? (
                <XMarkIcon
                  onClick={() => setOpen(!open)}
                  className="text-slate-900 h-8 w-8"
                />
              ) : (
                <Bars3Icon
                  onClick={() => setOpen(!open)}
                  className="text-slate-900 h-8 w-8"
                />
              )}
            </div>
            <nav className="flex flex-col h-[40vh] justify-around items-start px-16 bg-black ">
              {links.map((item) => (
                <Link
                  key={item.id}
                  onClick={() => setOpen(!open)}
                  className={`${
                    item.active ? "text-peach" : "text-slate-50"
                  } hover:text-peach text-2xl uppercase`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Navbar;
