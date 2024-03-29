import Hamburger from "../islands/Hamburger.tsx";

export default function About() {
  return (
    <div class="h-screen bg-primary lg:overflow-hidden">
      <Hamburger />
      <div class="flex flex-col-reverse lg:flex-row lg:justify-between">
        <div class="flex items-center justify-center">
          <div class="bg-offWhite text-darkGray text-md xs:text-lg overflow-y-scroll rounded-lg p-2 m-4 mt-4 h-[50vh] sm:h-fit md:text-xl md:p-4 lg:h-[60vh] lg:ml-6 lg:mr-8 xl:h-fit xl:mr-12 xl:ml-10">
            <p class="py-2">
              'Hello, my name is Kirsty - I'm a tech person with a background in
              healthcare.
            </p>
            <p class="py-2">
              It would be ideal to work in a job where I could meld the two
              together, but as I'm only at the beginning of my tech journey, I'm
              still open-minded about all the possibilities available to me. I
              want to learn, grow, and discover where I fit in the tech space.
              As long as it involves working with people and life-long learning,
              I think it will be fun!
            </p>
            <p class="py-2">
              Apart from that, I love solving escape rooms, eating delicious
              food, and travelling the world.'
            </p>
            <p class="py-4">
              To find out more, please{" "}
              <a
                class="hover:text-green-800 font-bold"
                href="https://drive.google.com/file/d/1Gf-oSnnr1dbvDmaLErpJaplyUEtSlCFf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                download my resume.
              </a>
            </p>
          </div>
        </div>
        <div class="relative flex flex-col items-end lg:mt-10 lg:float-right lg:h-screen">
          <div>
            <h1 class="text-2xl xs:text-3xl pt-2 pr-4 md:pt-0 lg:text-4xl lg:pt-4 text-end">
              about me
            </h1>
            <h2 class="text-2.5xl xs:text-6xl py-0 xs:py-2 lg:text-7xl xl:text-8xl sm:pb-[6vh] lg:pb-20 xl:pb-10 pr-4 text-right font-bold">
              kirsty <br /> ammundsen
            </h2>
          </div>
          <img
            class="hidden w-60 my-6 rounded-md lg:inline"
            src="/KirstyPortfolio.jpg"
            alt="Black and white portrait of Kirsty looking over her shoulder smiling"
          />
        </div>
      </div>
    </div>
  );
}
