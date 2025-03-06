import Herosection2 from "@/components/heroSection/Heroection2";
import HeroSection from "@/components/heroSection/HeroSection";
import useProtectedRoute from "@/hooks/useProtectedRoute";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Herosection2 />
    </div>
  );
}
