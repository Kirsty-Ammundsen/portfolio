import { useState } from "preact/hooks";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine =
    `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <div
      className={`float-left ${
        isOpen
          ? "pt-4 bg-[#4f504f] h-screen w-screen lg:w-1/2 transition ease transform duration-300"
          : "bg-[#b9bab9] pt-4 md:relative"
      }`}
    >
      <button
        className="ml-4 flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
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
          className={"text-white text-4xl font-bold flex flex-col gap-8 pr-10"}
        >
          <li className={"hover:text-black"}>about</li>
          <li className={"hover:text-black"}>projects</li>
          <li className={"hover:text-black"}>blog</li>
          <li className={"hover:text-black"}>contact</li>
        </ul>
      </nav>
    </div>
  );
}
