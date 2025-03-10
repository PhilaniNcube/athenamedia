import Link from "next/link";

const Footer = () => {
  // const router = useRouter();

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
      id: 6,
      href: "/contact",
      name: "Contact",
    },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="px-4 pb-16 mx-auto max-w-7xl pt-28">
        <div className="items-center justify-between py-2 mx-auto border-b max-w-7xl border-slate-100/30 lg:flex">
          <Link
            href="/"
            className="text-xl font-bold uppercase cursor-pointer text-peach"
          >
            {/* <Image
            className="object-cover w-48"
            src="/assets/shared/desktop/logo-dark.png"
            alt="logo"
            width={404}
            height={54}
          /> */}
            Athena Media
          </Link>

          <nav className="flex flex-col items-start mt-4 space-x-0 space-y-3 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-4">
            {links.map((item) => (
              <Link
                key={item.id}
                className={`${
                  item.href === "" ? "text-peach" : "text-slate-50"
                } hover:text-peach text-lg uppercase`}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col w-full mt-8 md:flex-wrap md:items-center">
          <div className="flex justify-between flex-1 w-full">
            <div>
              <h5 className="text-xs font-bold text-slate-200 md:text-sm">
                Address
              </h5>
              <h5 className="text-xs text-slate-200 md:text-sm">
                9 Athlone Street, Mount Pleasant
              </h5>
              <h5 className="text-xs text-slate-200 md:text-sm">
                Port Elizabeth, 6001
              </h5>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200 md:text-sm">
                Contact Us
              </h4>
              <h5 className="text-xs text-slate-200 md:text-sm">
                P +27 81 755 1279
              </h5>
              <h5 className="text-xs text-slate-200 md:text-sm">
                E info@athenamedia.co.za
              </h5>
            </div>
          </div>
          <div className="items-center justify-end flex-1 hidden py-4 space-x-3"></div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
