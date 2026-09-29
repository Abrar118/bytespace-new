import { CreatorCta } from "@/components/landing/creator-cta";
import { Discover } from "@/components/landing/discover";
import { FeatureHighlights } from "@/components/landing/feature-highlights";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { LearningPaths } from "@/components/landing/learning-paths";
import { PartnerStrip } from "@/components/landing/partner-strip";
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <>
      <main>
        <div className="grid-backdrop overflow-hidden text-white">
          <Header />
          <Hero />
        </div>
        <PartnerStrip />
        <Discover />
        <LearningPaths />
        <FeatureHighlights />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
