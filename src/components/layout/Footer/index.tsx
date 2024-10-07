import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

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

const Footer = () => {
  return (
    <footer className="full-width content-grid bg-neutral-950 py-20">
      <div className="flex items-center justify-between gap-10 max-md:flex-col">
        <div className="mr-24 flex h-5 w-20 items-center justify-center rounded-full bg-stone-200 text-center font-bold text-neutral-800">
          <span>nauth</span>
        </div>

        <nav>
          <ul className="flex items-center justify-between gap-6 text-sm *:cursor-pointer *:p-2">
            {navlink.map(({ name, link }) => (
              <li key={name} className="hover:text-purple-400">
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex size-10 items-center justify-center">
          <Link href={"https://x.com/Nauth_Nft"} target="_blank">
            <FaXTwitter className="text-2xl hover:text-purple-500" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
