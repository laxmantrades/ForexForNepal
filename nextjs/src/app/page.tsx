import Achievement from "@/components/heroSection/Achievement";
import Herosection2 from "@/components/heroSection/Heroection2";
import HeroSection from "@/components/heroSection/HeroSection";
import HeroSection3 from "@/components/heroSection/HeroSection3";
import Herosection4 from "@/components/heroSection/Herosection4";
import DailyOutLook from "@/components/heroSection/HeroSectionDailyOutLook";



export default function Home() {
  return (
    <div className=" -mt-20">
      <HeroSection />
      <Herosection2 />
      <HeroSection3 />
      <DailyOutLook/>
      <Achievement/>
    <Herosection4 />
      
    </div>
  );
}
