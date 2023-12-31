import Hamburger from "../islands/Hamburger.tsx";

export default function Home() {
  return (
    <div class=" bg-primary h-screen lg:overflow-hidden">
      <Hamburger />
      <div class="flex flex-col-reverse lg:flex-row lg:justify-between">
        <div class="flex items-center justify-center">
          <h2 class="bg-offWhite text-darkGray text-xl py-5 px-3 mt-4 m-4 rounded-lg w-full md:mr-36 lg:rounded-lg lg:block lg:text-4xl lg:py-12 lg:px-6
        lg:ml-16 lg:mr-28">
            '<strong>Welcome</strong>{" "}
            to my homepage - here you can find out more about me, see my
            projects, and get in contact.'
          </h2>
        </div>
        <div class="md:mt-10 relative flex flex-col items-end md:justify-between md:float-right md:h-screen">
          <h1 class="text-3xl pt-2 pr-4 md:text-4xl md:pt-4">my portfolio</h1>
          <h2 class="text-6xl md:text-8xl pb-4 md:pb-6 pr-4 text-right font-bold">
            kirsty <br /> ammundsen
          </h2>
          <img
            class="w-40 sm:w-56 md:w-60 my-2 md:my-6 rounded-md"
            src="/KirstyPortfolio.jpg"
            alt="Black and white portrait of Kirsty looking over her shoulder smiling"
          />
        </div>
      </div>
    </div>
  );
}
