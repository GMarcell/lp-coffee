import Navbar from "../../components/Navbar";
import Hero from "../../section/Hero";
import SpecialCoffee from "../../section/SpecialCoffee";
import Type from "../../section/Type";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Type/>
      <SpecialCoffee/>
    </div>
  );
}
