import Hamburger from "../islands/Hamburger.tsx";
import Tech from "../components/Tech.tsx"

export default function Projects() {
  return (
    <div className="h-screen bg-[#b9bab9] overflow-hidden">
      <Hamburger />
      <div className="flex justify-between">
        <div className="flex flex-col items-center justify-center">
          <section className="bg-[#f2f2f2] text-2xl py-6 px-4 rounded-lg opacity-60 ml-20 mr-28 h-5/6 w-96 my-20 overflow-y-scroll">
            <h3>Task Master</h3>
            {/* img */}
            <h4>Tech Used</h4>
            <div>
              <Tech>TypeScript</Tech>
              <Tech>Tailwind CSS</Tech>
            </div>
          </section>
        </div>
        <div className="float-right mt-10 h-screen relative flex flex-col items-end justify-between">
          <h1 className="text-4xl pt-4 pr-4">my projects</h1>
          <h2 className="text-8xl pb-4 pr-4 text-right font-bold">
            kirsty <br /> ammundsen
          </h2>
          <img
            className="my-6 rounded-md"
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
