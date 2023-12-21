import Hamburger from "../islands/Hamburger.tsx";

export default function Contact() {
  return (
    <div class="h-screen bg-[#b9bab9] overflow-hidden">
      <Hamburger />
      <div class="flex justify-between">
        <div class="flex flex-col items-center justify-center ">
          <p class="bg-white opacity-60 rounded-lg text-2xl py-12 px-6 ml-20 ">Resume - <a class="hover:text-green-800 font-bold" href="https://docs.google.com/document/d/1E1kWHfyMwnAf44LNHI8WtqTw7mKqbCDaPjlws0O73aA/export?format=pdf">download my resume</a>
          <br/>
          <br/>
          LinkedIn - <a class="hover:text-green-800 font-bold" href="https://www.linkedin.com/in/kirsty-ammundsen">view my profile</a>
          <br/>
          <br/>
          GitHub - <a class="hover:text-green-800 font-bold" href="https://github.com/Kirsty-Ammundsen">see my code</a>
          </p>
        </div>
        <div class="float-right mt-10 h-screen relative flex flex-col items-end justify-between">
          <h2 class="text-4xl pt-4 pr-4">contact info</h2>
          <h1 class="text-8xl pb-4 pr-4 text-right font-bold">
            kirsty <br /> ammundsen
          </h1>
          <img
            class="my-6 rounded-md"
            src="/KirstyPortfolio.jpg"
            width="250"
            height="200"
            alt="Black and white portrait of Kirsty looking over her shoulder smiling"
          />
        </div>
      </div>
    </div>
  );
}
