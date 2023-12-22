import Hamburger from "../islands/Hamburger.tsx";

export default function About() {
  return (
    <div class="h-screen bg-[#b9bab9] overflow-hidden">
      <Hamburger />
      <div class="flex justify-between">
      <div class="flex flex-col items-center justify-center">
        <div class="bg-white text-xl py-6 px-4
        rounded-lg opacity-60 ml-20 mr-28">
          <p class="py-2">'Hello, my name is Kirsty - I'm a tech person with a background in healthcare.</p>
          <p class="py-2">It would be ideal to work in a job where I could meld the two together, but as I'm only at the beginning of my tech journey, I'm still open-minded about all the possibilities available to me.  I want to learn, grow, and discover where I fit in the tech space.  As long as it involves working with people and life-long learning, I think it will be fun!</p>
          <p class="py-2">Apart from that, I love solving escape rooms, eating delicious food, and travelling the world.' </p>
          <p class="font-serif py-4">To find out more, please <a class="hover:text-green-800 font-bold" href="https://docs.google.com/document/d/1E1kWHfyMwnAf44LNHI8WtqTw7mKqbCDaPjlws0O73aA/export?format=pdf">download my resume.</a>
          </p>
        </div>
      </div>
      <div class="float-right mt-10 h-screen relative flex flex-col items-end justify-between">
        <h1 class="text-4xl pt-4 pr-4">about me</h1>
        <h2 class="text-8xl pb-4 pr-4 text-right font-bold">
          kirsty <br /> ammundsen
        </h2>
        <img
          class="my-6 rounded-md"
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
