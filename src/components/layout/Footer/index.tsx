import Link from "next/link";

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
        <div className="h-5 w-20 rounded-full bg-stone-200" />

        <nav>
          <ul className="flex items-center justify-between gap-6 text-sm *:cursor-pointer *:p-2">
            {navlink.map(({ name, link }) => (
              <li key={name} className="hover:text-purple-400">
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="size-10 rounded-lg bg-purple-500"></div>
      </div>
    </footer>
  );
};
export default Footer;
