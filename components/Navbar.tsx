"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      id: 1,
      href: "/company",
      name: "Our Company",
    },
    {
      id: 2,
      href: "/web-development",
      name: "Web Development",
    },

    {
      id: 3,
      href: "/digital-marketing",
      name: "Marketing",
    },

    {
      id: 4,
      href: "/website-analytics",
      name: "Analytics",
    },
    {
      id: 5,
      href: "/contact",
      name: "Contact",
    },
  ];

  return (
    <header className="py-3">
      {/**Desktop Navigation**/}
      <div className="items-center justify-between hidden px-4 py-2 mx-auto max-w-7xl md:flex">
        <Link href="/" className="text-xl font-bold uppercase cursor-pointer ">
          Athena Media
        </Link>

        <nav className="flex items-center space-x-4">
          {links.map((item) => (
            <Link
              key={item.id}
              className={`${
                item.href === "" ? "text-peach" : "text-slate-800"
              } hover:text-peach text-lg uppercase`}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/***Mobile Nav */}
      <div className="flex items-center justify-between px-4 py-8 mx-auto overflow-hidden md:hidden">
        <Link
          href="/"
          className="text-xl font-bold uppercase cursor-pointer text-slate-950"
        >
          {/* <Image
            className="object-cover w-36"
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
            className="w-8 h-8 text-slate-900"
          />
        ) : (
          <Bars3Icon
            onClick={() => setOpen(!open)}
            className="w-8 h-8 text-slate-900"
          />
        )}

        {open && (
          <div className="absolute inset-0 bg-slate-50 z-20 h-[50vh]">
            <div className="flex items-center justify-between px-4 py-8 mx-auto overflow-hidden md:hidden">
              <Link
                href="/"
                className="text-xl font-bold uppercase cursor-pointer text-slate-950"
                onClick={() => setOpen(!open)}
              >
                Athena Media
              </Link>
              {open ? (
                <XMarkIcon
                  onClick={() => setOpen(!open)}
                  className="w-8 h-8 text-slate-900"
                />
              ) : (
                <Bars3Icon
                  onClick={() => setOpen(!open)}
                  className="w-8 h-8 text-slate-900"
                />
              )}
            </div>
            <nav className="flex flex-col h-[40vh] justify-around items-start px-16 bg-black ">
              {links.map((item) => (
                <Link
                  key={item.id}
                  onClick={() => setOpen(!open)}
                  className={`${
                    item.href === "" ? "text-peach" : "text-slate-50"
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
