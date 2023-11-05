import About from "./About";
import Feat from "./Feat";
import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Foot from "./Foot";
import AddDetails from "./AddDetails/[id]/page";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#040013] to-[#11033d]">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Feat />
      <Foot />
    </div>
    //<AddDetails/>
  );
}
