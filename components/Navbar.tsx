import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {

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
    <header className="py-3">
      {/**Desktop Navigation**/}
      <div className="max-w-7xl py-2 hidden  mx-auto px-4 items-center lg:flex justify-between">
        <Link href="/" className="cursor-pointer">
          <Image
            className="w-48 object-cover"
            src="/assets/shared/desktop/logo-dark.png"
            alt="logo"
            width={404}
            height={54}
          />
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
    </header>
  );
};
export default Navbar;
