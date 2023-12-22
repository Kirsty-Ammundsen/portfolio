import Hamburger from "../islands/Hamburger.tsx";

export default function About() {
  return (
    <div class="h-screen bg-primary md:overflow-hidden">
      <Hamburger />
      <div class="flex flex-col-reverse md:flex-row md:justify-between">
      <div class="flex items-center justify-center">
        <div class="bg-lightGray text-lg p-2 m-4 mt-4 md:text-xl md:py-6 md:px-4
        rounded-lg text-darkGray md:ml-20 md:mr-28">
          <p class="py-2">'Hello, my name is Kirsty - I'm a tech person with a background in healthcare.</p>
          <p class="py-2">It would be ideal to work in a job where I could meld the two together, but as I'm only at the beginning of my tech journey, I'm still open-minded about all the possibilities available to me.  I want to learn, grow, and discover where I fit in the tech space.  As long as it involves working with people and life-long learning, I think it will be fun!</p>
          <p class="py-2">Apart from that, I love solving escape rooms, eating delicious food, and travelling the world.' </p>
          <p class="py-4">To find out more, please <a class="hover:text-green-800 font-bold" href="https://docs.google.com/document/d/1E1kWHfyMwnAf44LNHI8WtqTw7mKqbCDaPjlws0O73aA/export?format=pdf">download my resume.</a>
          </p>
        </div>
      </div>
      <div class="md:mt-10 relative flex flex-col items-end md:justify-between md:float-right md:h-screen">
        <h1 class="text-3xl md:text-4xl md:pt-4 pr-4">about me</h1>
        <h2 class="text-6xl md:text-8xl py-4 pr-4 text-right font-bold">
          kirsty <br /> ammundsen
        </h2>
        <img
          class="w-56 hidden md:inline my-6 rounded-md"
          src="/KirstyPortfolio.jpg"
          alt="Black and white portrait of Kirsty looking over her shoulder smiling"
        />
      </div>
      </div>
    </div>
  );
}
