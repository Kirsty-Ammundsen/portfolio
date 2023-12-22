import Hamburger from "../islands/Hamburger.tsx";

export default function Home() {
  return (
    <div class=" bg-primary h-screen lg:overflow-hidden">
      <Hamburger />
      {/* <div class="flex justify-between"> */}
      <div class="flex flex-col items-center justify-center">
        <h2 class="bg-lightGray text-darkGray hidden lg:block text-4xl py-12 px-6
        rounded-lg ml-16 mr-28">'<strong>Welcome</strong> to my homepage - here you can find out more about me, see my projects, and get in contact'</h2>
      </div>
      <div class="lg:float-right mt-10 h-screen relative flex flex-col items-end lg:justify-between">
        <h1 class="text-3xl pt-4 pr-4">my portfolio</h1>
        <h2 class="text-6xl lg:text-8xl py-4 pr-4 text-right font-bold">
          kirsty <br /> ammundsen
        </h2>
        <img
          class="my-14 rounded-md w-52"
          src="/KirstyPortfolio.jpg"
          alt="Black and white portrait of Kirsty looking over her shoulder smiling"
        />
      </div>
      {/* </div> */}
    </div>
  );
}
