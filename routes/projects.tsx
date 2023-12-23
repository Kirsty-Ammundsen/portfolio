import Hamburger from "../islands/Hamburger.tsx";
import Tech from "../components/Tech.tsx";

export default function Projects() {
  return (
    <div class="h-screen bg-primary md:overflow-hidden">
      <Hamburger />
      <div class="flex flex-col-reverse md:flex-row md:justify-between">
      <div class="flex items-center justify-center">
          <main class="bg-offWhite text-darkGray text-2xl py-2 px-4 m-4 mt-4 rounded-lg h-[55vh] sm:h-[65vh] md:ml-20 md:mr-28 md:h-[80vh] md:my-20 overflow-y-scroll">
            <section class="py-7">
              <h3 class="text-3xl font-bold">Task Master</h3>
              <img
                class="my-8 rounded-md"
                src="/taskmaster.png"
                alt="Screenshots (mobile sized) of the taskmaster app layout, showing the log in, profile, tasks and stats pages."
              />
              <h4 class="text-lg font-semibold py-3">Description:</h4>
              <p class=" text-base">
                A mobile app that allows physios to assign tasks to their
                clients and track their progress as they are completed. I
                created this app in a group of 4 people over 7 days. My main
                contributions were: coming up with the idea, acting as project manager to decide the basic functions and scope of the project, doing the CSS (the layouts, components,
                navigation bar, and login page), and creating the stats page from
                the database queries, API calls, to implementing chartJS to make
                the graphs.
              </p>
              <h4 class="text-lg font-semibold py-3">Tech Used:</h4>
              <div class="flex flex-row flex-wrap justify-center gap-2">
                <Tech>TypeScript</Tech>
                <Tech>Tailwind CSS</Tech>
                <Tech>React</Tech>
                <Tech>Knex</Tech>
                <Tech>SQLite3</Tech>
              </div>
            </section>
            <section class="py-7">
              <h3 class="text-3xl font-bold">PAtCHboaRD</h3>
              <img
                class="my-8 rounded-md"
                src="/patchboard.png"
                alt="Screenshot (laptop version) of the patchboard project with 4 sticky notes showing to do lists and an image carousel (image that rotates on click)."
              />
              <h4 class="text-lg font-semibold py-3">Description:</h4>
              <p class=" text-base">
                Our first React project in a team of 4, done over 5 hours.  It is a website that allows you to write to do lists and store pictures on your screen. My main contribution was styling the components using vanilla CSS (which goes through multiple themes on clicking the background).
              </p>
              <h4 class="text-lg font-semibold py-3">Tech Used:</h4>
              <div class="flex flex-row flex-wrap justify-center gap-2">
                <Tech>React</Tech>
                <Tech>CSS</Tech>
                <Tech>JavaScript</Tech>
                <Tech>HTML</Tech>
              </div>
            </section>
          </main>
        </div>
        <div class="md:mt-10 relative flex flex-col items-end md:justify-between md:float-right md:h-screen">
          <h1 class="text-3xl pt-2 pr-4 md:text-4xl md:pt-4">my projects</h1>
          <h2 class="text-6xl md:text-8xl pb-4 pr-4 text-right font-bold">
            kirsty <br /> ammundsen
          </h2>
          <img
            class="md:w-60 hidden md:inline my-6 rounded-md"
            src="/KirstyPortfolio.jpg"
            alt="Black and white portrait of Kirsty looking over her shoulder smiling"
          />
        </div>
      </div>
    </div>
  );
}
