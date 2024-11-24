"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AlignLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <header className="content-grid fixed z-50 w-full bg-purple-500 py-2 font-disket-mono">
      <nav className="relative flex items-center justify-between">
        <ul className="flex items-center justify-between gap-1 text-sm *:cursor-pointer *:p-2 max-md:hidden max-sm:hidden">
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

        <AlignLeft
          className="md:hidden"
          onClick={() => setOpenMobileNav((prev) => !prev)}
        />

        <AnimatePresence>
          {openMobileNav && (
            <motion.ul
              key="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-x-0 top-[140%] flex min-h-[50dvh] flex-col items-center justify-center gap-8 rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-8"
            >
              <li className="hover:font-bold hover:text-purple-500">
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
                <li
                  key={name}
                  className="hover:font-bold hover:text-purple-500"
                >
                  <Link href={link}>{name}</Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

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
