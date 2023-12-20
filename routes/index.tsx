import Hamburger from "../islands/Hamburger.tsx";

export default function Home() {
  return (
    <div class="h-screen bg-[#b9bab9] overflow-hidden">
      <Hamburger />
      <div class="float-right mt-10 h-screen relative flex flex-col items-end justify-between">
        <h2 class="text-4xl font pt-4 pr-4">my portfolio</h2>
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
  );
}
