import { useState } from "preact/hooks";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine =
    `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <div
      className={`lg:float-left pt-4 ${
        isOpen ? "bg-darkGray h-screen w-fit" : "bg-primary md:relative"
      }`}
    >
      <button
        className="ml-4 mr-20 flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
        aria-label="hamburger menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
      <nav className={isOpen ? "float-right" : "hidden"}>
        <ul
          className={"text-white text-4xl font-bold flex flex-col gap-8 pt-12 px-16"}
          aria-expanded
        >
          <a href="/">
            <li className={"hover:text-black"}>home</li>
          </a>
          <a href="/about">
            <li className={"hover:text-black"}>about</li>
          </a>
          <a href="/projects">
            <li className={"hover:text-black"}>projects</li>
          </a>
          {/* <a href="/blog"><li className={"hover:text-black"}>blog</li></a> */}
          <a href="/contact">
            <li className={"hover:text-black"}>contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
