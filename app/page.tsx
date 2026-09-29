import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { PartnerStrip } from "@/components/landing/partner-strip";

export default function Home() {
  return (
    <main>
      <div className="hero-grid overflow-hidden text-white">
        <Header />
        <Hero />
      </div>
      <PartnerStrip />
    </main>
  );
}
