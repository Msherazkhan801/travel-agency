import TeamSection from "@/components/Teams";
import HeroSlider from "../components/sliderHero";
import Contact from "./contact/page";
import Services from "./services/page";
import AboutHero from "@/components/ui/AboutHero";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Services/>
      <AboutHero/>
      <Contact/>
    </div>
  );
}
