import { Discover } from "@/components/landing/discover";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { LearningPaths } from "@/components/landing/learning-paths";
import { PartnerStrip } from "@/components/landing/partner-strip";

export default function Home() {
  return (
    <main>
      <div className="hero-grid overflow-hidden text-white">
        <Header />
        <Hero />
      </div>
      <PartnerStrip />
      <Discover />
      <LearningPaths />
    </main>
  );
}
