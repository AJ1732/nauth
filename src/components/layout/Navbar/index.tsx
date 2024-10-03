import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlignLeft } from "lucide-react";

const navlink = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "How It Works",
    link: "/demo",
  },
  // {
  //   name: "Upload and Verify",
  //   link: "/verify",
  // },
];

const Navbar = () => {
  return (
    <header className="content-grid fixed z-50 w-full bg-purple-500 py-6 font-disket-mono">
      <nav className="flex items-center justify-between">
        <ul className="flex items-center justify-between gap-1 text-sm *:cursor-pointer *:p-2 max-sm:hidden">
          {navlink.map(({ name, link }) => (
            <li key={name} className="hover:text-neutral-900 hover:font-bold">
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>

        <AlignLeft className="sm:hidden" />

        <div className="mr-24 h-5 w-20 rounded-full bg-stone-200" />

        <Button size={"lg"}>verify</Button>
      </nav>
    </header>
  );
};
export default Navbar;
