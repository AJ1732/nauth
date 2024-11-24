"use client";
import Link from "next/link";
import Image from "next/image";
import { AlignLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/img/nauth-logo.jpg";

const navlink = [
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
    <header className="content-grid fixed z-50 w-full bg-purple-500 py-2 font-disket-mono">
      <nav className="flex items-center justify-between">
        <ul className="flex items-center justify-between gap-1 text-sm *:cursor-pointer *:p-2 max-sm:hidden">
          <li className="hover:font-bold hover:text-neutral-900">
            <button
              onClick={() => {
                document.getElementById("about-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <Link href="/">about</Link>
            </button>
          </li>

          {navlink.map(({ name, link }) => (
            <li key={name} className="hover:font-bold hover:text-neutral-900">
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>

        <AlignLeft className="sm:hidden" />

        <Link href="/">
          <figure
            onClick={() => {
              document.getElementById("home-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="relative mr-24 size-20 rounded-full bg-stone-200"
          >
            <Image src={logo} alt="logo" fill />
          </figure>
        </Link>

        <Link href={"/verify"} className="block">
          <Button size={"lg"}>verify</Button>
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;
