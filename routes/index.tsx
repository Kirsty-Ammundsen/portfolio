import Hamburger from "../islands/Hamburger.tsx";

export default function Home() {
  return (
    <div class="h-screen bg-[#b9bab9] overflow-hidden">
      <Hamburger />
      <div class="flex justify-between">
      <div class="flex flex-col items-center justify-center">
        {/* <img
          class="my-6 rounded-md"
          src="/silverPohutukawa.jpg"
          width="250"
          height="200"
          alt="Black and white pohutukawa tree"
        /> */}
        <h2 class="bg-white hidden lg:block text-4xl py-12 px-6
        rounded-lg opacity-60 ml-16 mr-28 font-cursive">'<strong>Welcome</strong> to my homepage - here you can find out more about me, see my projects, and get in contact'</h2>
      </div>
      <div class="float-right mt-10 h-screen relative flex flex-col items-end justify-between">
        <h1 class="text-4xl pt-4 pr-4">my portfolio</h1>
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
