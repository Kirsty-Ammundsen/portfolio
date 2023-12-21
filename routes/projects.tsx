import Hamburger from "../islands/Hamburger.tsx";

export default function Projects() {
  return (
    <div class="h-screen bg-[#b9bab9] overflow-hidden">
      <Hamburger />
      <div class="flex justify-between">
        <div class="flex flex-col items-center justify-center">
          {/* left side */}
        </div>
        <div class="float-right mt-10 h-screen relative flex flex-col items-end justify-between">
          <h1 class="text-4xl pt-4 pr-4">my projects</h1>
          {/* right side */}
        </div>
      </div>
    </div>
  );
}
