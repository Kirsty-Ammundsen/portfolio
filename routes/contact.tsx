import Hamburger from "../islands/Hamburger.tsx";

export default function Contact() {
  return (
    <div class="h-screen bg-primary md:overflow-hidden">
      <Hamburger />
      <div class="flex flex-col-reverse lg:flex-row lg:justify-between">
        <div class="flex items-center justify-center ">
          <p class="bg-offWhite text-darkGray rounded-lg text-xl py-4 px-8 m-4 mt-4 md:mr-40 md:text-2xl md:py-12 md:px-6 md:mx-20 ">Resume - <a class="hover:text-green-800 font-bold" href="https://docs.google.com/document/d/1E1kWHfyMwnAf44LNHI8WtqTw7mKqbCDaPjlws0O73aA/export?format=pdf">download my resume</a>
          <br/>
          <br/>
          LinkedIn - <a class="hover:text-green-800 font-bold" href="https://www.linkedin.com/in/kirsty-ammundsen">view my profile</a>
          <br/>
          <br/>
          GitHub - <a class="hover:text-green-800 font-bold" href="https://github.com/Kirsty-Ammundsen">see my code</a>
          </p>
        </div>
        <div class="md:mt-10 relative flex flex-col items-end md:justify-between md:float-right md:h-screen">
          <h1 class="text-3xl pt-2 pr-4 md:text-4xl md:pt-4">contact info</h1>
          <h2 class="text-6xl md:text-8xl pb-4 pr-4 text-right font-bold">
            kirsty <br /> ammundsen
          </h2>
          <img
            class="w-56 md:w-60 md:inline my-6 rounded-md"
            src="/KirstyPortfolio.jpg"
            alt="Black and white portrait of Kirsty looking over her shoulder smiling"
          />
        </div>
      </div>
    </div>
  );
}
