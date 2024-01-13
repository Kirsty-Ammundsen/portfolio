import Hamburger from "../islands/Hamburger.tsx";

export default function Home() {
  return (
    <div class=" bg-primary h-screen lg:overflow-hidden">
      <Hamburger />
      <div class="flex flex-col-reverse md:flex-row md:justify-between">
        <div class="flex items-center justify-center">
          <h2 class="bg-offWhite text-darkGray text-xl py-5 px-3 mt-4 m-4 rounded-lg w-full md:mt-0  md:ml-16 md:mr-8 lg:rounded-lg lg:block lg:py-12 lg:px-6 lg:text-2xl lg:mr-16 lg:ml-8 xl:text-4xl xl:mr-30 xl:py-12 xl:px-12">
            '<strong>Welcome</strong>{" "}
            to my homepage - here you can find out more about me, see my
            projects, and get in contact.'
          </h2>
        </div>
        <div class="lg:mt-10 relative flex flex-col items-end md:h-[95vh] lg:float-right lg:h-screen">
          <div>
            <h1 class="text-3xl pt-2 pr-4 md:pt-0 lg:text-4xl lg:pt-4 text-end">
              my portfolio
            </h1>
            <h2 class="text-6xl py-2 lg:text-7xl xl:text-8xl md:pb-28 lg:pb-20 xl:pb-10 pr-4 text-right font-bold">
              kirsty <br /> ammundsen
            </h2>
          </div>
          <img
            class="w-40 sm:w-48 md:w-60 lg:w-60 my-2 md:my-6 rounded-md"
            src="/KirstyPortfolio.jpg"
            alt="Black and white portrait of Kirsty looking over her shoulder smiling"
          />
        </div>
      </div>
    </div>
  );
}
