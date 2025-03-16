import Encryption from "@/Component/sub/Encryption";
// import CardSlider from "@/Component/sub/CardSlider";
import Hero from "@/Component/main/Hero";
import Footer from "@/Component/main/Footer";
import Card from "@/Component/main/Card";
import { SliderCard } from "@/Component/sub/SliderCard";

export default function Home() {
  return (
    <main className="h-full w-auto overflow-x-hidden">
      <div className="flex flex-col">
        <Hero />
        <Encryption />
        <SliderCard />
        {/* <CardSlider/> */}
        <Card />
        <Footer />
      </div>
    </main>
  );
}
