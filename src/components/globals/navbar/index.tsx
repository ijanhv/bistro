import Link from "next/link";
import { Logo } from "./logo";

export const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className="box z-10 h-16 sticky bg-[#0C0C0C] top-0 w-full flex justify-between items-center text-diplomatic text-lg">
      <Logo />

      <div className="lg:flex space-x-4 hidden">
        {navLinks.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
