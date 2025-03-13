import Herosection2 from "@/components/heroSection/Heroection2";
import HeroSection from "@/components/heroSection/HeroSection";
import HeroSection3 from "@/components/heroSection/HeroSection3";

import useProtectedRoute from "@/hooks/useProtectedRoute";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Herosection2 />
      <HeroSection3 />
    </div>
  );
}
