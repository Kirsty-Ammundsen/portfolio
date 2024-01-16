import Hamburger from "../islands/Hamburger.tsx";
import Tech from "../components/Tech.tsx";

export default function Projects() {
  return (
    <div class="h-screen bg-primary xl:overflow-hidden">
      <Hamburger />
      <div class="flex flex-col-reverse xl:flex-row xl:justify-between">
        <div class="flex items-center justify-center">
          <main class="bg-offWhite text-darkGray py-2 px-4 m-4 mt-4 rounded-lg overflow-y-scroll h-[50vh] md:h-[58vh] lg:ml-3 lg:mr-14 xl:h-[70vh] xl:ml-8 xl:mr-12">
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
                contributions were: coming up with the idea, acting as project
                manager to decide the basic functions and scope of the project,
                doing the CSS (the layouts, components, navigation bar, and
                login page), and creating the stats page from the database
                queries, API calls, to implementing chartJS to make the graphs.
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
              <div class="flex justify-center">
                <img
                  class="my-8 rounded-md self-center"
                  src="/patchboard.png"
                  alt="Screenshot (laptop version) of the patchboard project with 4 sticky notes showing to do lists and an image carousel (image that rotates on click)."
                />
              </div>
              <h4 class="text-lg font-semibold py-3">Description:</h4>
              <p class=" text-base">
                Our first React project in a team of 4, done over 5 hours. It is
                a website that allows you to write to do lists and store
                pictures on your screen. My main contribution was styling the
                components using vanilla CSS (which goes through multiple themes
                on clicking the background).
              </p>
              <h4 class="text-lg font-semibold py-3">Tech Used:</h4>
              <div class="flex flex-row flex-wrap justify-center gap-2">
                <Tech>React</Tech>
                <Tech>CSS</Tech>
                <Tech>JavaScript</Tech>
                <Tech>HTML</Tech>
              </div>
            </section>
            <section class="py-7">
              <h3 class="text-3xl font-bold">My Portfolio</h3>
              <div class="flex justify-center">
                <img
                  class="my-8 rounded-md self-center"
                  src="/myportfolio.png"
                  alt="Screenshot of my welcome page for this portfolio website."
                />
              </div>
              <h4 class="text-lg font-semibold py-3">Description:</h4>
              <p class=" text-base">
                My first solo project post-bootcamp has been this portfolio to
                display other projects I have done and will do. I have used a
                slightly different tech stack so that I can learn something new.
              </p>
              <h4 class="text-lg font-semibold py-3">Tech Used:</h4>
              <div class="flex flex-row flex-wrap justify-center gap-2">
                <Tech>Preact</Tech>
                <Tech>Tailwind CSS</Tech>
                <Tech>Deno</Tech>
                <Tech>Fresh</Tech>
              </div>
            </section>
          </main>
        </div>
        <div class="relative flex flex-col items-end lg:mt-10 xl:float-right xl:h-screen">
          <div>
            <h1 class="text-2xl xs:text-3xl pt-2 pr-4 md:pt-0 lg:text-4xl lg:pt-4 text-end">
              my projects
            </h1>
            <h2 class="text-2.5xl xs:text-6xl py-0 xs:py-2 lg:text-7xl sm:pb-[5vh] lg:pb-[3vh] xl:pb-10 pr-4 text-right font-bold">
              kirsty <br /> ammundsen
            </h2>
          </div>
          <img
            class="hidden w-60 my-6 rounded-md xl:inline"
            src="/KirstyPortfolio.jpg"
            alt="Black and white portrait of Kirsty looking over her shoulder smiling"
          />
        </div>
      </div>
    </div>
  );
}
