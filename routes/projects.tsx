import Hamburger from "../islands/Hamburger.tsx";

export default function Projects() {
  return (
    <div class="h-screen bg-[#b9bab9] overflow-hidden">
      <Hamburger />
      <div class="flex justify-between">
        <div class="flex flex-col items-center justify-center">
          <div class="bg-[#f2f2f2] text-2xl py-6 px-4
        rounded-lg opacity-60 ml-20 mr-28 h-5/6 w-96 my-20 overflow-y-scroll">
            projects
          </div>
        </div>
        <div class="float-right mt-10 h-screen relative flex flex-col items-end justify-between">
          <h1 class="text-4xl pt-4 pr-4">my projects</h1>
          <h2 class="text-8xl pb-4 pr-4 text-right font-bold">
            kirsty <br /> ammundsen
          </h2>
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
