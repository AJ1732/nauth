import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <ul className="flex items-center justify-between max-sm:hidden gap-1 text-sm *:cursor-pointer *:p-2">
          {navlink.map(({ name, link }) => (
            <li key={name}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>

        

        <div className="mr-24 h-5 w-20 rounded-full bg-stone-200" />

        <Button size={"lg"}>verify</Button>
      </nav>
    </header>
  );
};
export default Navbar;
