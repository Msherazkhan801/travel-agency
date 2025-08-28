import TeamSection from "@/components/Teams";
import HeroSlider from "../components/sliderHero";
import Contact from "./contact/page";
import Services from "./services/page";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Services/>
      {/* <TeamSection/> */}
      <Contact/>
    </div>
  );
}
