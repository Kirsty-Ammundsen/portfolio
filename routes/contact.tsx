import Hamburger from "../islands/Hamburger.tsx";

export default function Contact() {
  return (
    <div class="h-screen bg-primary lg:overflow-hidden">
      <Hamburger />
      <div class="flex flex-col-reverse lg:flex-row lg:justify-between">
        <div class="flex items-center justify-center ">
          <p class="bg-offWhite text-darkGray flex flex-col gap-2 rounded-lg text-xl py-4 px-8 m-4 mt-4 md:mr-40 md:text-2xl md:py-12 md:px-12 md:mx-20 ">
            <span>
              Resume -{" "}
              <a
                class="hover:text-green-800 font-bold inline"
                href="https://docs.google.com/document/d/1E1kWHfyMwnAf44LNHI8WtqTw7mKqbCDaPjlws0O73aA/export?format=pdf"
              >
                download my resume
              </a>
            </span>
            <span>
              LinkedIn -{" "}
              <a
                class="hover:text-green-800 font-bold inline"
                href="https://www.linkedin.com/in/kirsty-ammundsen"
              >
                view my profile
              </a>
            </span>
            <span>
              GitHub -{" "}
              <a
                class="hover:text-green-800 font-bold inline"
                href="https://github.com/Kirsty-Ammundsen"
              >
                see my code
              </a>
            </span>
          </p>
        </div>
        <div class="md:mt-10 relative flex flex-col items-end md:justify-between md:float-right md:h-screen">
          <h1 class="text-3xl pt-2 pr-4 md:text-4xl md:pt-4">contact info</h1>
          <h2 class="text-6xl md:text-8xl pb-4 pr-4 text-right font-bold">
            kirsty <br /> ammundsen
          </h2>
          <img
            class="w-40 sm:w-56 md:w-60 md:inline my-6 rounded-md"
            src="/KirstyPortfolio.jpg"
            alt="Black and white portrait of Kirsty looking over her shoulder smiling"
          />
        </div>
      </div>
    </div>
  );
}
