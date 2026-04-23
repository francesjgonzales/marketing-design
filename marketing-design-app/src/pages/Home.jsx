import Features from "../components/Features";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Features />
      <Gallery />
      <Timeline />
    </div>
  );
}
