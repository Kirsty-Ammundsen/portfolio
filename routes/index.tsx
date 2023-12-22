import Hamburger from "../islands/Hamburger.tsx";

export default function Home() {
  return (
    <div class=" bg-primary h-screen md:overflow-hidden">
      <Hamburger />
      <div class="flex flex-col-reverse md:flex-row md:justify-between">
      <div class="flex items-center justify-center">
        <h2 class="bg-lightGray text-darkGray text-xl py-5 px-2 mt-14 w-full lg:rounded-lg lg:block lg:text-4xl lg:py-12 lg:px-6
        lg:ml-16 lg:mr-28">'<strong>Welcome</strong> to my homepage - here you can find out more about me, see my projects, and get in contact.'</h2>
      </div>
      <div class="md:mt-10 relative flex flex-col items-end md:justify-between md:float-right md:h-screen">
        <h1 class="text-3xl md:text-4xl md:pt-4 pr-4">my portfolio</h1>
        <h2 class="text-6xl md:text-8xl py-4 pr-4 text-right font-bold">
          kirsty <br /> ammundsen
        </h2>
        <img
          class="mt-8 md:mt-14 rounded-md w-56 md:w-60"
          src="/KirstyPortfolio.jpg"
          alt="Black and white portrait of Kirsty looking over her shoulder smiling"
        />
      </div>
      </div>
    </div>
  );
}
